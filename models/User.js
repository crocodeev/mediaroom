import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: String,
        userName: { type: String, required: true, unique: true},
        passwordHash:{ type: String, required: true },
        role:{ type:String, required: true},
        channels:[String],
        active: { type: Boolean, required: true}
    }
)


export default  mongoose.models.User || mongoose.model('User', PetSchema)