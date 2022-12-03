import React from 'react'
import styles from './Post.module.css';
import viewsIcon from '../../../assets/icons/eye.png'
import renderHTML from 'react-render-html'

const Post = ({ title, text, viewCount, imageUrl }) => {

    console.log(process.env)
   
    return (
        <div className={styles.post}>
            <div className={styles.postInfo}>
                <h1>{title}</h1>
                <div className={styles.text}>{renderHTML(text)}</div>
            </div>
            <div>
                <img src={`http://localhost:4444${imageUrl}`} alt="" />
            </div>
            <div className={styles.otherInfo}>
                <div className={styles.viewsCount}>
                    <img src={viewsIcon} alt="" />
                    <p>{viewCount}</p>
                </div>
            </div>
        </div>
    )
}



export default Post;