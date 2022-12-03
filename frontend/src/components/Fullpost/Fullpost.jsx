import React from 'react';
import styles from './Fullpost.module.css'
import renderHTML from 'react-render-html';

const Fullpost = ({postData}) => {
    
    if(postData){
        return (
            <div className={styles.Fullpost}>
                <img src={`http://localhost:4444${postData.imageUrl}`} alt="" />
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
