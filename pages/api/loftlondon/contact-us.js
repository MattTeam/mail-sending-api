// The endpoint : https://mail-sending-api.vercel.app/api/loftlondon/contact-us
import allowCors from "../../../allow-cors";
import middleware from"../../../utils/middleware";
import handler from"../../../utils/handler";
import initMiddleware from '../../../utils/init-middleware';
import validateMiddleware from '../../../utils/validate-middleware';
import { check, validationResult } from 'express-validator'
import contactTmep from './lib/contact-temp';
const nodemailer = require("nodemailer"); 

const validateBody = initMiddleware(
  validateMiddleware([
      check('name').isString().withMessage('Name should be only string !').isLength({min:2, max: 40}).withMessage('Name length should 4 to 40 charecters !'),
      check('email').exists().withMessage("Email is required").isEmail().withMessage("Invalid email address !"), 
      check('phone').isLength({min:9, max: 14}).withMessage("Phone number is invalid !"),
      check('message').exists().withMessage('Message is required !')
  ], validationResult)
)


// check('message').matches(/^([0-9A-z\ \_]+)$/, 'g').withMessage('Message should not use uniq characters !')
handler.post(async (req, res) => { 
    try {
      const data = req.body; // get the json object sent by the client
      await validateBody(req, res);
      const errors = validationResult(req) ;
      if (!errors.isEmpty()) {
        return res.status(405).json({ errors: errors.array() })
      }
      //using nodemailer library to send emails
      // const transporter = nodemailer.createTransport({
      //   service: "gmail",
      //   auth: {
      //     user: process.env.USERNAME,
      //     pass: process.env.PASSWORD, // naturally, replace both with your real credentials or an application-specific password
      //   },
      // });
      // const transporter = nodemailer.createTransport({ 
      //     pool:true,
      //     host : process.env.SMTP_HOST_LOFT,
      //     port: process.env.SMTP_PORT,
      //     secure: false, // upgrade later with STARTTLS
      //     auth: {
      //       user: process.env.SMTP_USER_LOFT,
      //       pass: process.env.SMTP_PASS_LOFT
      //     },
      //     tls: {
      //       rejectUnauthorized: false
      //   }
      // });  

      const transporter = nodemailer.createTransport({
        // host: "smtp.example.com",
          pool:true,
          host : process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          secure: false, // upgrade later with STARTTLS
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          },
          tls: {
            rejectUnauthorized: false
        }
      });
      // Just changed Client Emails : 
      //data.to info@loft.london, matt@dubseo.co.uk, rickydubey1986@gmail.com', rickydubey1986@gmail.com, bablu.developer16@gmail.com, matt@dubseo.co.uk info@loft.london, matt@dubseo.co.uk, 
      var mailContent =  await contactTmep(data) ;
      const mailOptions = {
        from: "info@loft.london",
        to: 'matt@dubseo.co.uk,info@loft.london',
        subject:
          "loft.london | New "+data.from+" from " + data.name,
        html: mailContent,
      }; 
      const result = await transporter.sendMail(mailOptions);
      console.log("Email sent :",result);
        res.status(200).send({ status: "OK", result: result });
    } catch (err) { 
      console.log("Email sent error:",err);

        res.status(500).json({ status: "FAILED", error: err.message });
    } 

});

module.exports = allowCors(handler) ;

// handler // middleware(allowCors(handler));
