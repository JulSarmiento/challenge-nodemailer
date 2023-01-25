const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1337d3a8b41090",
    pass: "b4e823b5a4ca09"
  }
  });

module.exports = function (notification, name, email) {

  let notifications = [
    {
      subject : "We have received your contact form",
      title: "We have received your contact form",
      notification: `Holis ${name}, En momentos te estaremos enviando un email :D`,
    }  
  ]

  let htmlMessage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>

      <style>
        body {
          font-family: 'Roboto Mono', monospace;
        }

        .header{
          padding: 0 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          margin-bottom: 2rem;
        }

        .header img{
          width: 10rem;
        }
      
        .title{
          font-size: 3rem;
          font-weight: 700;
          color: #000;
        }

        .main {
          padding: 0 5%;
        }
      
      </style>
    </head>
    <body>

      <header class="header">
        <img src="/public/images/StudyCorn Dev Logo.png" alt="">
        <h1>Holis ${name}</h1>
      </header>

      <main class="main">
        <h2>Muchas gracias!</h2>
        <p>
          Gracias por participar en la actividad 
        </p>
      </main>
      
    </body>
  </html>
  `

  transporter.verify().then(() => {
    console.log("Ready for send emails");
  });

  transporter.sendMail({
    from: 'StudyCornDEv',
    to: email,
    subject: notifications[notification].title,
    html: htmlMessage,
    attachments: [
      {
        filename: 'StudyCorn Dev Logo.png',
        path: './public/images/StudyCorn Dev Logo.png',
        cid: 'logo'
      }
    ]
  }).then(info => {
    console.log(info);
  }).catch(error => {
    console.log(error);
  });
}