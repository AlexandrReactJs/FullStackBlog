import React from 'react'
import styles from './Post.module.css';
import viewsIcon from '../../../assets/icons/eye.png'

const Post = ({title, text, viewCount}) => {
    return (
        <div className={styles.post}>
            <div>
                <img src="https://i.pinimg.com/originals/df/6a/9e/df6a9e89bb01c9fcabb9e78275e1b72e.jpg" alt="" />
            </div>
            <div className={styles.postInfo}>
                <h1>{title}</h1>
                <p>{text}</p>
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