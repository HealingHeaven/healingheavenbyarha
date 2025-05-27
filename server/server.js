const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
console.log(process.env.EMAIL_USER + "email");

// API Route for Contact Form
app.post("/api/contact", async (req, res) => {
    const { email, name, phone, message } = req.body;

    console.log(email, name, phone, message)
    if (!email || !name || !phone) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Change to your email or recipient email
        subject: "New Contact Form Submission",
        text: `You have received a new contact request.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending email" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
