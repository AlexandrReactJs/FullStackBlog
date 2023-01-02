import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import { registerValidation, loginValidation, postCreateValidation } from './validations/validations.js';
import checkAuth from './utils/checkAuth.js';
import { authMe, login, register } from './controllers/UserController.js';
import { create, getAll, getOne, getPostsCategory, remove, update, createCategory, getCategories, removeCategory } from './controllers/PostController.js';
import checkValidationErorr from './utils/checkValidationErorr.js';
import cors from 'cors';

const app = express();

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads')
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname)
    },

})

const upload = multer({ storage })


mongoose.connect('mongodb+srv://admin:1234567890@cluster0.qgbeskx.mongodb.net/blog?retryWrites=true&w=majority').then(() => {
    console.log('DB OK')
}).catch((err) => {
    console.log('DB NOT CONNECTION', err)
})

const db = mongoose.connection;

app.use(express.json());
app.use(cors())

app.use('/uploads', express.static('uploads'));

app.post('/auth/login', loginValidation, checkValidationErorr, login)

app.post('/auth/register', registerValidation, checkValidationErorr, register)

app.get('/auth/me', checkAuth, authMe)

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })

})

app.get('/posts', getAll)
app.get('/postsCategory/:category', getPostsCategory)
app.get('/posts/:id', getOne)
app.post('/posts', checkAuth, postCreateValidation, checkValidationErorr, create)
app.delete('/posts/:id', checkAuth, remove)
app.patch('/posts/:id', checkAuth, postCreateValidation, checkValidationErorr, update)

app.post('/categories', createCategory)
app.get('/categories', getCategories)
app.delete('/categories/:id', removeCategory)


app.listen(4444, (err) => {
    if (err) {
        return console.log("erorr")
    }

    console.log('server ok')
})