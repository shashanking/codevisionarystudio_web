import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
const SMTP_SERVER_HOST = process.env.NEXT_APP_SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.NEXT_APP_SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.NEXT_APP_SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECEIVER = process.env.NEXT_APP_SITE_MAIL_RECEIVER;
const SITE_MAIL_SENDER = process.env.NEXT_APP_SMTP_MAIL_SENDER;
const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST,
  port: 587,
  //   secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD
  }
});

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, name, phone = "", subject = "" } = req.query;

  // Validate input
  if (!email || !name) {
    return res.status(400).json({ message: "Email and Name are required" });
  }

  try {
    const _isVerified = await transporter.verify();

    const mailText = `Name: ${name}\n  Email: ${email}\nPhone:${phone} \nSubject: ${subject}`;
    await transporter.sendMail({
      from: SITE_MAIL_SENDER,
      to: SITE_MAIL_RECEIVER,
      subject: `New contact form submission from ${name}`,
      text: mailText
    });
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to send email" });
  }
}
