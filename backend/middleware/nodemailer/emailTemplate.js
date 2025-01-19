// import express from 'express';

// const app = express();
// app.use(express.static('public'));

// const logoURL = "http://localhost:5173/logo.png";

// export const verificationEmailTemplate = (verificationToken) => {
//   return `
//     <div
//       style="
//         font-family: Arial, sans-serif;
//         max-width: 600px;
//         margin: 20px auto;
//         padding: 20px;
//         border: 1px solid #ccc;
//         border-radius: 5px;
//         text-align: center;
//         background-color: #f9f9f9;
//       "
//     >
//       <!-- Logo and Website Name -->
//       <div style="margin-bottom: 20px; text-align: center;">
//         <img src="${logoURL}" alt="Notesy Logo" style="width: 100px; height: 100px; object-fit: cover;" />
//         <h1 style="margin: 0; font-size: 24px; color: #333;">Notesy</h1>
//       </div>

//       <!-- Email Content -->
//       <h2 style="color: #333;">Welcome to Notesy!</h2>
//       <p style="color: #555; font-size: 16px;">
//         We're excited to have you on board! Please use the verification token below to verify your email address.
//       </p>

//       <!-- Verification Token Field -->
//       <div
//         style="
//           font-size: 24px;
//           font-weight: bold;
//           color: #007bff;
//           letter-spacing: 5px;
//           margin: 20px 0;
//         "
//       >
//         ${verificationToken}
//       </div>

//       <p style="color: #555; font-size: 14px; margin-bottom: 10px;">
//         If you did not create an account, no further action is required.
//       </p>

//       <p style="color: #aaa; font-size: 12px;">
//         &copy; ${new Date().getFullYear()} Notesy. All rights reserved.
//       </p>
//     </div>
//   `;
// };

// export const welcomeEmailTemplate = (fullname) => {
//   return `
// <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; width: 100%; max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
//           <!-- Logo and Website Name -->
//       <div style="margin-bottom: 20px; text-align: center;">
//         <img src="${logoURL}" alt="Notesy Logo" style="width: 100px; height: 100px; object-fit: cover;" />

//         <h1 style="margin: 0; font-size: 24px; color: #333;">Notesy</h1>
//       </div>
//     <p style="font-size: 16px; line-height: 1.5; color: #666;">Dear ${fullname},</p>
//     <p style="font-size: 16px; line-height: 1.5; color: #666;">We are thrilled to have you join us! As part of our community, you can start creating Notes based on your interests and goals.</p>
//     <a href="http://localhost:5173/" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 5px; margin-top: 20px;">Start Creating Notes</a>
//     <p style="font-size: 16px; line-height: 1.5; color: #666;">We look forward to seeing you thrive, Let's Notesy!</p>
//     <div style="margin-top: 20px; font-size: 12px; color: #999;">
//         <p>Best regards,<br>Notesy Team</p>
//     </div>
// </div>

// `;
// };

const logoURL =
  "https://raw.githubusercontent.com/vivek-oza/image-hosting/refs/heads/main/Notesy/notesyLogo.png"; // Replace with hosted URL if needed
const primaryColor = "#007BFF";
const backgroundColor = "#f9f9f9";
const textColor = "#333";
const secondaryTextColor = "#666";
const borderRadius = "8px";

const sharedStyles = {
  container: `
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #eaeaea;
    border-radius: ${borderRadius};
    text-align: center;
    background-color: ${backgroundColor};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  `,
  logo: `
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-bottom: 10px;
  `,
  header: `
    font-size: 24px;
    color: ${textColor};
    margin: 0 0 20px 0;
  `,
  bodyText: `
    color: ${secondaryTextColor};
    font-size: 16px;
    line-height: 1.6;
    margin: 10px 0;
  `,
  button: `
    display: inline-block;
    padding: 10px 20px;
    background-color: ${primaryColor};
    color: #fff;
    text-decoration: none;
    border-radius: ${borderRadius};
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0;
  `,
  footerText: `
    color: #aaa;
    font-size: 12px;
    margin-top: 20px;
  `,
};

export const verificationEmailTemplate = (verificationToken) => `
  <div style="${sharedStyles.container}">
    <img src="${logoURL}" alt="Notesy Logo" style="${sharedStyles.logo}" />
    <h1 style="${sharedStyles.header}">Notesy</h1>
    <p style="${sharedStyles.bodyText}">
      Welcome to Notesy! We're excited to have you on board. Use the verification token below to verify your email address:
    </p>
    <div style="font-size: 24px; font-weight: bold; color: ${primaryColor}; letter-spacing: 5px; margin: 20px 0;">
      ${verificationToken}
    </div>
    <p style="${sharedStyles.bodyText}">
      If you did not create an account, no further action is required.
    </p>
    <p style="${sharedStyles.footerText}">
      &copy; ${new Date().getFullYear()} Notesy. All rights reserved.
    </p>
  </div>
`;

export const welcomeEmailTemplate = (fullname) => `
  <div style="${sharedStyles.container}">
    <img src="${logoURL}" alt="Notesy Logo" style="${sharedStyles.logo}" />
    <h1 style="${sharedStyles.header}">Notesy</h1>
    <h1 style="${sharedStyles.header}">Welcome, ${fullname}!</h1>
    <p style="${sharedStyles.bodyText}">
      We are thrilled to have you join Notesy! Start creating notes based on your interests and goals.
    </p>
    <a href="http://localhost:5173/" style="${sharedStyles.button}">Start Creating Notes</a>
    <p style="${sharedStyles.bodyText}">
      We look forward to seeing you thrive with Notesy. Let's create together!
    </p>
    <p style="${sharedStyles.footerText}">
      Best regards,<br />Notesy Team
    </p>
  </div>
`;
