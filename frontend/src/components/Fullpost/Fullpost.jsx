import React from 'react';
import styles from './Fullpost.module.css'
import renderHTML from 'react-render-html';

const Fullpost = ({ postData }) => {

    if (postData) {
        return (
            <div className={styles.Fullpost}>
                <img src={`http://localhost:4444${postData.imageUrl}`} alt="" />
                <div className={styles.postInfo}>
                    <div className={styles.title}>
                        <h1>{postData.title}</h1>
                        <div className={styles.underline}></div>
                    </div>

                    {renderHTML(postData.text)}
                </div>

            </div>

        )
    }

    return (
        <>
            <h1>Loading...</h1>
        </>
    )


}


export default Fullpost;
