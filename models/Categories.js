import mongoose from "mongoose";

const CategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    engName: {
        type: String,
        required: true
    },
})




export default mongoose.model('Categories', CategoriesSchema)