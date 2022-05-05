import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const filmSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, { timestamps: true})

const Film = mongoose.model('film', filmSchema);
export default Film;