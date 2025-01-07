const mongoose = require("mongoose");
const Joi = require("joi")






const songSchema = new mongoose.Schema({
    title:{type: String, required: true},
    artist:{type: String, required: true},
    // song:{type: String, required: true},
    file: { type: String, required: true },
    img:{type: String, required: true},
    duration:{type: Number, required: true},
})

const validate = (song)=>{
    const schema = Joi.object({
        title: Joi.string().required(),
        artist: Joi.string().required(),
        // song: Joi.string().required(),
        file: Joi.string().uri().required(),
        img: Joi.string().required(),
        duration: Joi.number().required(),
    })
    return schema.validate(song);
}

const Song = mongoose.model("Song", songSchema)

model.exports = {Song, validate}