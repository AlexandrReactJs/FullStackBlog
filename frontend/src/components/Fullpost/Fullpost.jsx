import React from 'react';
import styles from './Fullpost.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setPostData } from '../../Redux/Slices/FullPostSlice';

const Fullpost = () => {
    const dispatch = useDispatch();
    const postData = useSelector(state => state.fullPostSlice.postData);
    const { id } = useParams();

        React.useEffect(() => {
            axios.get(`http://localhost:4444/posts/${id}`).then((res) => {
                dispatch(setPostData(res.data))
            })
        }, []);

    if(postData){
        return (
            <div className={styles.Fullpost}>
                <img src="https://i.pinimg.com/originals/df/6a/9e/df6a9e89bb01c9fcabb9e78275e1b72e.jpg" alt="" />
                <div className={styles.postInfo}>
                    <h1>{postData.title}</h1>
                    <p>{postData.text}</p>
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
