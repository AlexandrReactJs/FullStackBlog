import postModel from '../models/Post.js'
import categoriesModel from '../models/Categories.js'

export const removeCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;

        await categoriesModel.findByIdAndRemove(
            {
                _id: categoryId
            },
    
            res.json({
                statusCode: 0
            })
        );
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось удалить категорию'
        })
    }
}

export const getCategories = async (req, res) => {
    try {
        
        const categories = await categoriesModel.find();
        res.json(categories)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось получить категории'
        })
    }
}

export const createCategory = async (req, res) => {
    try {
        const doc = new categoriesModel({
            name: req.body.name,
            engName: req.body.engName
        })

        const category = await doc.save();

        res.json(category)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })

    }
}

export const getPostsCategory = async (req, res) => {
    try {
        const category = req.params.category;

        const post = await postModel.find({ category })
        res.send(post)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось получить посты'
        })
    }
}

export const create = async (req, res) => {
    try {
        const doc = new postModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            user: req.userId,
            category: req.body.category,
        })

        const post = await doc.save();

        res.json(post)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать пост'
        })

    }
}


export const getAll = async (req, res) => {
    try {

        const category = req.query.category;
        if (!category) {
            const start = req.query.start
            const end = req.query.end;

            

            const posts = await postModel.find().populate('user').exec();
            const result = posts.slice(start, end)

            res.json({ posts: [...result], totalCount: posts.length })
        } else {
            const page = req.query.page;
            const pageSize = req.query.pageSize;

            const from = page * pageSize - pageSize;
            const before = page * pageSize

            const posts = await postModel.find({category}).populate('user').exec();
            const result = posts.slice(from, before)

            res.json({ posts: [...result], totalCount: posts.length })
        }







    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось получить посты'
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;

        postModel.findOneAndUpdate({
            _id: postId
        },
            {
                $inc: { viewCount: 1 }
            },
            {
                returnDocument: 'after'
            },
            (err, doc) => {
                if (err) {
                    console.log(error)
                    return res.status(400).json({
                        message: 'Не удалось вернуть пост'
                    })
                }

                if (!doc) {
                    return res.status(404).json({
                        message: 'Не удалось найти пост'
                    })
                }

                res.json(doc);
            })


    } catch (error) {

    }
}

export const remove = async (req, res) => {
    const postId = req.params.id;
    await postModel.findByIdAndRemove(
        {
            _id: postId
        },

        res.json({
            statusCode: 0
        })
    );
}

export const update = async (req, res) => {
    try {
        const postId = req.params.id;

        await postModel.updateOne({
            _id: postId
        },
            {
                title: req.body.title,
                text: req.body.text,
                imageUrl: req.body.imageUrl,
                tags: req.body.tags,
                user: req.userId,
            }
        )

        res.json({
            success: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "При обновлении поста произошла ошибка"
        })
    }
}