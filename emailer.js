const nodemailer = require('nodemailer');

// SMTP transport object
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: '*********@gmail.com', // Use your gmail ID, Rememebr to lower the security and disable 2FA
        pass: '*********'// Use your gmail password
    }
});

module.exports = {
    sendMail : function(from, to, subject, htmlBody, callback) {
        // Message object
        const message = {
            // sender info
            from : from,
            // Comma separated list of recipients
            to : to,
            // Subject of the message
            subject : subject,
            // HTML Body of the message
            html : htmlBody.toString()
        };

        console.log('Sending email "' + subject + '" to: ' + to);
        transporter.sendMail(message, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
          });
    }
}
