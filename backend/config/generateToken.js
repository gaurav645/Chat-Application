// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv"); // Add this line

// // dotenv.config(); // Add this line to load environment variables

// const generateToken = async (id) => {
//   try {
//     const token = await jwt.sign({ id }, 'NOTESAPI', { // Use process.env.JWT_SECRET
//       expiresIn: "30d",
//     });
//     return token;
//     console.log(token)    
//   } catch (error) {
//     console.error("Error generating token:", error.message);
//     throw new Error("Unable to generate token");
//   }
// };

// module.exports = generateToken;


const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Token expiration time
  });
  return token;
};

module.exports = generateToken;
