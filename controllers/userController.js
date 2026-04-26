

require("dotenv").config();
const nodemailer = require("nodemailer");

// EMAIL SETUP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


const addUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

  
    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields required" });
    }


    await transporter.sendMail({
      from: `"Your Portfolio Website" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: "New Contact Message",
      html: `<h3>Hey! Muskan Memon, you have received a new contact request through your Portfolio website.</h3>
       <ul> <li><strong>Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li> 
        <li><strong>Phone:</strong> ${phone}</li>
         <li><strong>Message:</strong> ${message}</li> 
         </ul> `
    });

    res.json({
      success: true,
      message: "Message sent successfully ✅",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { addUser };