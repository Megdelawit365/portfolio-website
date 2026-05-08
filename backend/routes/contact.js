const express = require("express")
const axios = require("axios")
const nodemailer = require("nodemailer")

const router = express.Router()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
})

router.post("/", async (req, res) => {

    try {

        const { name, email, message } = req.body

        if (!name || !email || !message) {
            return res.status(400).json({
                error: "All fields are required"
            })
        }

        // VERIFY EMAIL WITH EMAILABLE
        const verifyRes = await axios.get(
            `https://api.emailable.com/v1/verify?email=${email}&api_key=${process.env.EMAILABLE_API_KEY}`
        )

        // deliverable | undeliverable
        if (verifyRes.data.state !== "deliverable") {
            return res.status(400).json({
                error: "Invalid or undeliverable email address"
            })
        }

        // SEND EMAIL
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Message from ${name}`,
            html: `
                <h2>New Portfolio Message</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>

                <p>${message}</p>
                 `
        })

        res.json({
            success: true,
            message: "Message sent successfully"
        })

    } catch (err) {

        console.log(err)

        res.status(500).json({
            error: "Something went wrong"
        })
    }
})

module.exports = router