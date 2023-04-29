import nodemailer from 'nodemailer';

export default class EmailService {
    async sendEmail(emailTo, subject, body) {
        console.log(process.env.EMAIL_HOST);

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false, 
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
          });

        console.log("emailto:", emailTo);

        const info = await transporter.sendMail({
            from: `Weather Thing <${process.env.EMAIL_USER}>`,
            to: emailTo,
            subject: subject,
            html: body,
        });

        console.log(`E-mail sent: ${info.messageId}`);
    }
}