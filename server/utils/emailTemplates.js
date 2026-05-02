/**
 * Professional Email Template for Admin
 */
export const adminEmailTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #2c3e50; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; padding: 30px; border: 1px solid #edf2f7; border-radius: 8px; background-color: #ffffff; }
        .header { border-bottom: 2px solid #e53e3e; padding-bottom: 15px; margin-bottom: 20px; }
        .title { font-size: 22px; font-weight: bold; color: #1a202c; text-transform: uppercase; letter-spacing: 1px; }
        .content { margin-top: 20px; }
        .field { margin-bottom: 15px; display: flex; border-bottom: 1px solid #f7fafc; padding-bottom: 8px; }
        .label { font-weight: 600; color: #718096; width: 140px; shrink-0; }
        .value { color: #1a202c; font-weight: 500; }
        .message-box { background: #f8fafc; padding: 20px; border-left: 4px solid #e53e3e; margin-top: 20px; border-radius: 0 4px 4px 0; }
        .footer { font-size: 12px; color: #a0aec0; margin-top: 30px; border-top: 1px solid #edf2f7; padding-top: 15px; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="title">New Business Inquiry</div>
        </div>
        <div class="content">
            <div class="field"><span class="label">Full Name:</span> <span class="value">${data.firstName} ${data.lastName}</span></div>
            <div class="field"><span class="label">Email:</span> <span class="value">${data.email}</span></div>
            <div class="field"><span class="label">Phone:</span> <span class="value">${data.phone}</span></div>
            <div class="field"><span class="label">Subject:</span> <span class="value">${data.subject || 'Not Specified'}</span></div>
            <div class="message-box">
                <div style="font-weight:bold; margin-bottom:10px; color: #2d3748;">Message Content:</div>
                <div style="white-space: pre-wrap;">${data.message}</div>
            </div>
        </div>
        <div class="footer">
            This inquiries was securely processed by the GT Technologies Contact System.
        </div>
    </div>
</body>
</html>
`;

/**
 * Professional Email Template for User
 */
export const userEmailTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #2c3e50; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; padding: 40px; border: 1px solid #edf2f7; border-radius: 8px; background-color: #ffffff; }
        .content { margin-bottom: 30px; }
        .signature { margin-top: 40px; border-top: 2px solid #e53e3e; padding-top: 20px; }
        .footer { font-size: 11px; color: #a0aec0; margin-top: 20px; text-align: center; }
        .brand { color: #e53e3e; font-weight: bold; font-size: 18px; text-decoration: none; }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <p style="font-size: 18px; font-weight: 600;">Dear ${data.firstName},</p>
            <p>Thank you for reaching out to <strong>GT Technologies</strong>.</p>
            <p>We have successfully received your message regarding <strong>"${data.subject || 'General Inquiry'}"</strong>.</p>
            <p>Our dedicated team is currently reviewing your submission and will get back to you within 24 business hours with a detailed response.</p>
            <p>If you have any immediate questions, feel free to reply to this email.</p>
        </div>
        <div class="signature">
            <p style="margin: 0; font-weight: 600;">Best Regards,</p>
            <a href="https://geektheo.com" class="brand">GT Technologies Team</a><br>
            <span style="font-size: 13px; color: #718096;">Innovation Through Excellence</span>
        </div>
        <div class="footer">
            © 2026 GT Technologies. All rights reserved.<br>
            Ujjain, Indore, Madhya Pradesh
        </div>
    </div>
</body>
</html>
`;
