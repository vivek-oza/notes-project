import { verificationEmailTemplate } from "./emailTemplate.js";
import { welcomeEmailTemplate } from "./emailTemplate.js";
import { transporter } from "./nodemailer.config.js";

// const mailOptions = {
//   from: {
//     name: "Notesy",
//     address: "notesy.dev@gmail.com",
//   }, //sender address
//   to: ["vivekoza297@gmail.com", "testuser123234@yopmail.com"], //list of receivers
//   subject: "Test Email using NODEMAILER for NOTESY - Notes project", //subject line
//   text: "This is a test email", //plain text body
//   html: "<b>This is a test email OTP : <h1>453268</h1></b>", //html body
// };

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const response = await transporter.sendMail({
      from: {
        name: "Notesy",
        address: "notesy.dev@gmail.com",
      }, //sender address
      to: email, //receiver email, [can be sent to multiple emails by passing an array of emails]
      subject: "Verify you account for NOTESY - Notes App", //subject line
      // text: "This is a test email", //plain text body
      html: verificationEmailTemplate(verificationToken), //html body
    });
    console.log("Verification email sent successfully");
  } catch (error) {
    console.log("Error in sending verification email:", error.message);
    throw new Error("Error in sending verification email");
  }
};

export const sendWelcomeEmail = async (email, fullname) => {
  try {
    const response = await transporter.sendMail({
      from: {
        name: "Notesy",
        address: "notesy.dev@gmail.com",
      }, //sender address
      subject: "Welcome to NOTESY - Notes App", //subject line,
      to: email, //receiver email, [can be sent to multiple emails by passing an array of emails]
      html: welcomeEmailTemplate(fullname), //html body
    });
    console.log("Welcome email sent successfully");
  } catch (error) {
    console.error("Error in sending welcome email:", error.message);
    return res.status(500).json({
      success: false,
      message: "Error in sending welcome email",
    });
  }
};
