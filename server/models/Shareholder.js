import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const ShareholderSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    address: String,
    IBAN: String,
    movie: String,
    balance: Number
}, { timestamps: true})

const Shareholder = mongoose.model('shareholder', ShareholderSchema);
export default Shareholder;