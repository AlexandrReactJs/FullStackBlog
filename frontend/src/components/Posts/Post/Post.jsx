import React from 'react'
import styles from './Post.module.css';
import viewsIcon from '../../../assets/icons/eye.png'
import renderHTML from 'react-render-html'

const Post = ({ title, text, viewCount }) => {
    if (text) {
        let arr = text.split('');
        console.log(arr)
    }
    return (
        <div className={styles.post}>
            <div className={styles.postInfo}>
                <h1>{title}</h1>
                {renderHTML(text)}
            </div>
            <div>
                <img src="https://i.pinimg.com/originals/df/6a/9e/df6a9e89bb01c9fcabb9e78275e1b72e.jpg" alt="" />
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