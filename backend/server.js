const express = require("express")
const cors = require("cors")
require("dotenv").config()

const contactRoute = require("./routes/contact")

const app = express()

app.use(cors({
    origin: [
        process.env.FRONTEND_URL,
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}))

app.use(express.json())

app.use("/api/contact", contactRoute)
app.get("/test", (req, res) => {
    res.json({ message: "Backend is working" })
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})