import express from 'express';

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const Email = (options) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  transporter.sendMail(options, (error, info) => {
    if (error) {
      console.error(error);
      return;
    }
  });
};

const EmailSender = (req, res) => {
  const name = req.body?.name || 'No name';
  const email = req.body?.email || 'No email';
  const message = req.body?.message || 'No message';
  const mailOptions = {
    from: email,
    to: process.env.SEND_TO,
    subject: 'Message from : ',
    html: `<h1>Message from ${name}</h1>`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };
  Email(mailOptions);
  res.status(201).json({ msg: 'server' });
};

export default EmailSender;
