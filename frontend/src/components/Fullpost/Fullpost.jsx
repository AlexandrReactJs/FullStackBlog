import React from 'react';
import styles from './Fullpost.module.css'
import renderHTML from 'react-render-html';

const Fullpost = ({postData}) => {
    
    if(postData){
        return (
            <div className={styles.Fullpost}>
                <img src="https://i.pinimg.com/originals/df/6a/9e/df6a9e89bb01c9fcabb9e78275e1b72e.jpg" alt="" />
                <div className={styles.postInfo}>
                    <h1>{postData.title}</h1>
                    {renderHTML(postData.text)}
                </div>
    
            </div>
            
        )
    }

    return(
        <>
            <h1>Loading...</h1>
        </>
    )

    
}


export default Fullpost;
