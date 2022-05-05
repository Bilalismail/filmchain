import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const TransferSchema = new Schema({
    movie: String,
    pay: Number,
    ref: String
}, { timestamps: true})

const Transfer = mongoose.model('Transfer', TransferSchema);
export default Transfer;