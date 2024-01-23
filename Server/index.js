import express from 'express'
const app = express()
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose, { Schema } from 'mongoose'
dotenv.config()
app.use(cors())
app.use(express.json())

const outSchema = new Schema({
    text: { type: String, required: true },
    price: { type: String, required: true }
}, { timestamps: true })

const Outs = mongoose.model("Outs", outSchema)
app.get('/outs', async (req, res) => {
    try {
        const outs = await Outs.find({})
        res.send(outs)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})
app.get('/outs/:id', async (req, res) => {
    try {
        const outs = await Outs.findById(req.params.id)
        res.send(outs)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.post('/outs', async (req, res) => {
    try {
        const out = new Outs({
            text: req.body.text,
            price: req.body.price
        })
        await out.save()
        res.send({ message: "Created" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.delete('/outs/:id', async (req, res) => {
    try {
        const outs = await Outs.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})
const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)
mongoose.connect(url)
    .then(() => console.log("Db connect"))
    .catch(err => console.log("Db not connect" + err))
app.listen(port, () => {
    console.log(`Example app listening on port `)
})