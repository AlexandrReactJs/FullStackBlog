import { body } from "express-validator";


export const loginValidation = [
    body('email').isEmail(),
    body('password').isLength({min: 1}),
]

export const registerValidation = [
    body('email').isEmail(),
    body('password').isLength({min: 1}),
    body('fullName').isLength({min:3}),
    body('avatarUrl').optional().isURL()
]

export const postCreateValidation = [
    body('title').isLength({min:3}).isString(),
    body('text').isLength({min: 5}).isString(),
    body('tags').optional().isArray(),
    body('imagerUrl').optional().isString()
]