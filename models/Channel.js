import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true}
    }
)


export default  mongoose.models.Channel || mongoose.model('Channel', schema)