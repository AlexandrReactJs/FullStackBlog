import postModel from '../models/Post.js'

export const create = async (req, res) => {
    try {
        const doc = new postModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            user: req.userId,
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
        const posts = await postModel.find().populate('user').exec();

        res.json(posts)

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

                if(!doc) {
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