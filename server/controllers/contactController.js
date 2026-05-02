import nodemailer from 'nodemailer';
import { adminEmailTemplate, userEmailTemplate } from '../utils/emailTemplates.js';

// Transporter configuration - using a function to ensure env vars are loaded
let transporter = null;

const getTransporter = () => {
    if (transporter) return transporter;

    console.log(' [SMTP] Initializing transporter with:', process.env.EMAIL_HOST);

    transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Verify connection
    transporter.verify((error, success) => {
        if (error) {
            console.error(' [SMTP] Connection Error:', error.message);
        } else {
            console.log(' [SMTP] Server is connected and ready to send messages');
        }
    });

    return transporter;
};


/**
 * Validation Helper
 */
const validateContactData = (data) => {
    const errors = [];
    if (!data.firstName?.trim()) errors.push('First name is required');
    if (!data.lastName?.trim()) errors.push('Last name is required');
    if (!data.email?.trim() || !/\S+@\S+\.\S+/.test(data.email)) errors.push('Valid email is required');
    if (!data.phone?.trim()) errors.push('Phone number is required');
    if (!data.message?.trim()) errors.push('Message cannot be empty');
    return errors;
};

export const handleContactForm = async (req, res) => {
    const { firstName, lastName, email, phone, subject, message } = req.body;

    // 1. Server-side validation
    const validationErrors = validateContactData(req.body);
    if (validationErrors.length > 0) {
        return res.status(400).json({
            success: false,
            error: 'Validation Failed',
            details: validationErrors
        });
    }

    try {
        const mailTransporter = getTransporter();

        // 2. Prepare Email Options
        const adminMailOptions = {
            from: `"GT Contact System" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL,
            replyTo: email,
            subject: `[NEW INQUIRY] ${subject || 'Contact Submission'}`,
            html: adminEmailTemplate(req.body),
        };

        const userMailOptions = {
            from: `"GT Technologies" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `We've Received Your Inquiry - GT Technologies`,
            html: userEmailTemplate(req.body),
        };

        console.log(` [Email] Dispatching inquiry from: ${email}`);

        // 3. Send Emails concurrently
        await Promise.all([
            mailTransporter.sendMail(adminMailOptions),
            mailTransporter.sendMail(userMailOptions)
        ]);

        console.log(` [Email] Success: Sent to admin and user (${email})`);


        return res.status(200).json({
            success: true,
            message: 'Your inquiry has been successfully transmitted. Our team will contact you soon.'
        });

    } catch (error) {
        console.error(' [Email] Dispatch Failure:', error);

        // Detailed error logging for debugging (don't send details to client in production)
        return res.status(500).json({
            success: false,
            error: 'Service temporarily unavailable. Please try again later or contact us directly via phone.'
        });
    }
};
