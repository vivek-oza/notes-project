export const generateVerificationToken = () => {
     return Math.floor(100000 + Math.random() * 900000).toString();
}


// import crypto from 'crypto';

// export const generateVerificationToken = () => {

//   return crypto.randomBytes(6).toString('hex');

// };