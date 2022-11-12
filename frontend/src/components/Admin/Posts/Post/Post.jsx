import React from 'react'
import styles from './Post.module.css'


const Post = ({title, text, viewsCount}) => {
  return (
    <div className={styles.Post}>
        <img src="https://i.pinimg.com/originals/df/6a/9e/df6a9e89bb01c9fcabb9e78275e1b72e.jpg" alt="img" />
        <div className={styles.postTitle}>
            <h3>{title}</h3>
        </div>
        <div className={styles.postText}>
            <p>
                {text}
            </p>
        </div>
        <div className={styles.postViews}>
            <p>
                {viewsCount}
            </p>
        </div>
    </div>
  )
}


export default Post;