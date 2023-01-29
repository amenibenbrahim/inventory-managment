const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  // Create Email Transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amenibenbrahim4@gmail.com",
      pass: "znxsuroxsmkmsssh",
    }
   
  });

  // Option for sending email
  const mailOptions = {
    from: `Ameni ben Brahim <amounajhon@gmail.com}>`, // Something like: Jane Doe <janedoe@gmail.com>
    to: "amenibenbrahim4@gmail.com",
    subject: subject, // email subject
    text: message,
  };

  transporter.sendMail(mailOptions, (erro, info) => {
    if (erro) {
      return res.status(200).json({ data: erro.toString() });
    }
    return res.status(200).json({ data: "Sended" });
  });
};

module.exports = sendEmail;
