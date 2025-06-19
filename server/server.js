const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Transporter (Gmail)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

// Verify connection config (optional but good practice)
transporter.verify((error, success) => {
    if (error) {
        console.error("Error verifying transporter:", error);
    } else {
        console.log("Server is ready to send emails");
    }
});

// POST /api/contact
app.post("/api/contact", async (req, res) => {
    const { email, name, phone, message } = req.body;
    if (!email) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_USER,
        subject: "New Contact Form Submission",
        text: `
You have received a new contact request:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message || "No message provided"}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Contact Form Submitted" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Error sending email", error });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
