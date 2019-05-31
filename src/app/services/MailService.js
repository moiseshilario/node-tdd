const nodemailer = require('nodemailer');
const mailConfig = require('../../config/mailConfig');

class MailService {
  send(message) {
    const transporter = nodemailer.createTransport(mailConfig);

    return transporter.sendMail(message);
  }
}

module.exports = new MailService();
