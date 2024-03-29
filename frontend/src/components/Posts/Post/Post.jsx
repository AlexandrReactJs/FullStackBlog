import React from 'react'
import styles from './Post.module.scss';
import renderHTML from 'react-render-html'
import { Link } from 'react-router-dom'

import noImage from '../../../assets/image/no-image.png'

const Post = ({ title, text, tags, imageUrl, postId, createdAt }) => {

    let createdAtModified = createdAt.split('T')
    

    return (
        <>
            <Link to={`/posts/${postId}`}>
                <div className={styles.post}>
                    <div className={styles.postInfo}>
                        <div className={styles.titleWrapper}>
                            <div>
                                <h1 className={styles.title}>{title}</h1>
                                <div className={styles.underline}></div>
                            </div>
                            <p className={styles.createdAt}>{createdAtModified[0].replaceAll('-','.')}</p>
                        </div>

                        <div className={styles.text}>{renderHTML(text)}</div>
                    </div>
                    <div className={styles.previewImg}>
                        <img src={ !imageUrl ? noImage : `http://localhost:4444${imageUrl}`} alt="" />
                    </div>
                    <div className={styles.otherInfo}>
                        <div className={styles.tags}>
                            {
                                tags.map(el => <div className={styles.tag}>{el}</div>)
                            }
                        </div>
                    </div>
                </div>
            </Link >
        </>
    )
}



export default Post;