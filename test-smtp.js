import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: './server/.env' });

console.log('Testing SMTP connection with:');
console.log('Host:', process.env.EMAIL_HOST);
console.log('Port:', process.env.EMAIL_PORT);
console.log('User:', process.env.EMAIL_USER);
console.log('Secure:', process.env.EMAIL_SECURE);

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

console.log('Starting SMTP verification...');

transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP Connection Error Details:');
        console.error('Code:', error.code);
        console.error('Command:', error.command);
        console.error('Response:', error.response);
        console.error('Response Code:', error.responseCode);
        console.error('Full Error:', error);
    } else {
        console.log('SMTP Server is ready to take our messages');
    }
    process.exit();
});

console.log('Verification request sent, waiting for response...');

