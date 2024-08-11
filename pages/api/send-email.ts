import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
const SMTP_SERVER_HOST = process.env.NEXT_APP_SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.NEXT_APP_SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.NEXT_APP_SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.NEXT_APP_SITE_MAIL_RECIEVER;
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
  try {
    const _isVerified = await transporter.verify();
  } catch (error) {
    console.error(
      "Something Went Wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error
    );
    res.status(502);
    return;
  }
  const info = await transporter.sendMail({
    from: "hello@imarabinda.in",
    to: SITE_MAIL_RECIEVER,
    subject: "New contact form submission",
    text: "hii",
    html: "hiii"
  });
  console.log("Message Sent", info.messageId);
  console.log("Mail sent to", SITE_MAIL_RECIEVER);

  res.status(200).json({ message: "Mail sent!" });
}
