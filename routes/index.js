// Requiring all the packages
var express = require("express"),
  nodemailer = require("nodemailer"),
  { google } = require("googleapis"),
  OAuth2 = google.auth.OAuth2,
  router = express.Router({ mergeParams: true });


///////////////////////////////////////////////
///////-------------Home Page--------------////
///////////////////////////////////////////////
router.get("/", function (req, res) {
  res.render("index");
});

router.post("/", function (req, res) {

  console.log(req.body, 'req.body')

  const userName = req.body.username;
  const phoneNumber = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;

  try {

    if (userName && phoneNumber && email && message) {
      const oauth2Client = new OAuth2(
        process.env.CLIENT_ID, // ClientID
        process.env.CLIENT_SECRET, // Client Secret
        process.env.REDIRECT_URL // Redirect URL
      );

      oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN,
      });

      const accessToken = oauth2Client.getAccessToken();

      const output = `
                <h2>From Dynamic Solutions Contact Us Form</h2>
                <p><b>User Info: </b> ${userName} with ${email} and ${phoneNumber} sends you a message.</p>
                <p>${message}</p>
      `;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });

      // send mail with defined transport object
      const mailOptions = {
        from: `"${process.env.SENDER_NAME}" <${process.env.EMAIL}>`, // sender address
        to: process.env.EMAIL, // list of receivers
        subject: "Contact Us Form ✔", // Subject line
        html: output, // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Mail sent : %s", info.response);
          return res.render("index", { success: true });
        }
      });
    }

  } catch (err) {
    // return next(new ErrorResponse(err, 400));
  }
});

///////////////////////////////////////////////
///////------Rander Services Page========-----////
///////////////////////////////////////////////
router.get("/services", function (req, res) {
  res.render("services");
});
///////////////////////////////////////////////
///////------Rander Mobile App Development Page========-----////
///////////////////////////////////////////////
router.get("/mobile-app-development", function (req, res) {
  res.render("mobile-app-development");
});

///////////////////////////////////////////////
///////------Rander Web Development Page========-----////
///////////////////////////////////////////////
router.get("/web-development", function (req, res) {
  res.render("web-development");
});

///////////////////////////////////////////////
///////------Rander eCommerce Development Page========-----////
///////////////////////////////////////////////
router.get("/ecommerce-development", function (req, res) {
  res.render("ecommerce-development");
});

///////////////////////////////////////////////
///////------Rander Blockchain Development Page========-----////
///////////////////////////////////////////////
router.get("/blockchain-development", function (req, res) {
  res.render("blockchain-development");
});

///////////////////////////////////////////////
///////------Rander Game Development Page========-----////
///////////////////////////////////////////////
router.get("/game-development", function (req, res) {
  res.render("game-development");
});

///////////////////////////////////////////////
///////------Rander Salesforce Development Page========-----////
///////////////////////////////////////////////
router.get("/salesforce-development", function (req, res) {
  res.render("salesforce-development");
});

///////////////////////////////////////////////
///////------Rander AI & ML Development Page========-----////
///////////////////////////////////////////////
router.get("/artificial-intelligence", function (req, res) {
  res.render("artificial-intelligence");
});

///////////////////////////////////////////////
///////------Rander IOT Development Page========-----////
///////////////////////////////////////////////
router.get("/iot-development", function (req, res) {
  res.render("iot-development");
});

///////////////////////////////////////////////
///////------Rander Business Central Page========-----////
///////////////////////////////////////////////
router.get("/business-central", function (req, res) {
  res.render("business-central");
});
///////////////////////////////////////////////
///////------Rander Business Central Page========-----////
///////////////////////////////////////////////
router.get("/microsoft-dynamics-365-partner", function (req, res) {
  res.render("microsoft-dynamics-365-partner");
});
///////////////////////////////////////////////
///////------Rander About us Page========-----////
///////////////////////////////////////////////
router.get("/about", function (req, res) {
  res.render("about-us");
});
///////////////////////////////////////////////
///////------Rander Contact us Page========-----////
///////////////////////////////////////////////
router.get("/contact", function (req, res) {
  res.render("contact");
});
///////////////////////////////////////////////
///////------Rander Contact us Page POST request========-----////
///////////////////////////////////////////////
router.post("/contact", function (req, res) {
  console.log(req.body, 'req.body')

  const userName = req.body.username;
  const phoneNumber = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;

  try {

    if (userName && phoneNumber && email && message) {
      const oauth2Client = new OAuth2(
        process.env.CLIENT_ID, // ClientID
        process.env.CLIENT_SECRET, // Client Secret
        process.env.REDIRECT_URL // Redirect URL
      );

      oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN,
      });

      const accessToken = oauth2Client.getAccessToken();

      const output = `
                <h2>From Dynamic Solutions Contact Us Form</h2>
                <p><b>User Info: </b> ${userName} with ${email} and ${phoneNumber} sends you a message.</p>
                <p>${message}</p>
      `;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });

      // send mail with defined transport object
      const mailOptions = {
        from: `"${process.env.SENDER_NAME}" <${process.env.EMAIL}>`, // sender address
        to: process.env.EMAIL, // list of receivers
        subject: "Contact Us Form ✔", // Subject line
        html: output, // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Mail sent : %s", info.response);
          return res.render("contact", { success: true });
        }
      });
    }



  } catch (err) {
    // return next(new ErrorResponse(err, 400));
  }
});

module.exports = router;
