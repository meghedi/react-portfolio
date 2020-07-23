const nodemailer = require('nodemailer');

module.exports = {
      email: function(req, res) {
        var data = req.body;

        var smtpTransport = nodemailer.createTransport({
          service: 'Gmail',
          port: 465,
          auth: {
            user: 'hacopian.m@gmail.com',
            pass: 'BoojG20!*'
          }
        });
        
        var mailOptions = {
          from: data.email,
          to: 'ENTER_YOUR_EMAIL',
          subject: 'ENTER_YOUR_SUBJECT',
          html: `<p>${data.name}</p>
                  <p>${data.email}</p>
                  <p>${data.message}</p>`
        };
        
        smtpTransport.sendMail(mailOptions,
        (error, response) => {
          if(error) {
            res.send(error)
          }else {
            res.send('Success')
          }
          smtpTransport.close();
        });
      }

};