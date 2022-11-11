import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styles from './AddPost.module.css';
import { setPostText, setPostTitle } from '../../../Redux/Slices/AdminSlice';


const AddPost = () => {
    const dispatch = useDispatch();
    const JWTToken = useSelector(state => state.adminSlice.adminData.token)
    const titleValue = useSelector(state => state.adminSlice.addPostData.title)

    const titleRef = React.useRef(null)

    const addPost = (body) => {
        axios.post('http://localhost:4444/posts', body, { headers: { Authorization: "Bearer " + JWTToken } }).then((res) => {

            console.log(
                res
            )
        })
    
    }

    const onChangeTitle = (event) => {
        const text = titleRef.current.value;
        dispatch(setPostTitle(text))
    }



    return (
        <div className={styles.addPost}>
            <div className={styles.addTitle}>
                <textarea ref={titleRef} value={titleValue} onChange= {onChangeTitle} placeholder='Добавить заголовок'/>
            </div>
            <div className={styles.addText}>
                <textarea placeholder='Добавить текст'/>
            </div>
            <button></button>
        </div>
    )
}


export default AddPost;