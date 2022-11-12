import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styles from './AddPost.module.css';
import { setPostText, setPostTitle } from '../../../Redux/Slices/AdminSlices/AdminSlice';


const AddPost = () => {
    const dispatch = useDispatch();
    const JWTToken = useSelector(state => state.adminSlice.adminData.token)

    const titleValue = useSelector(state => state.adminSlice.addPostData.title)
    const textValue = useSelector(state => state.adminSlice.addPostData.text)
    const postData = useSelector(state => state.adminSlice.addPostData)

    const titleRef = React.useRef(null);
    const textRef = React.useRef(null);

    const addPost = (body) => {
        axios.post('http://localhost:4444/posts', body, { headers: { Authorization: "Bearer " + JWTToken } }).then((res) => {

            console.log(res);
        })
    
    }

    const onChangeTitle = () => {
        const text = titleRef.current.value;
        dispatch(setPostTitle(text))
    }


    const onChangeText = () => {
        const text = textRef.current.value;
        dispatch(setPostText(text))
    }


    return (
        <div className={styles.addPost}>
            <div className={styles.addTitle}>
                <textarea ref={titleRef} value={titleValue} onChange= {onChangeTitle} placeholder='Добавить заголовок'/>
            </div>
            <div className={styles.addText}>
                <textarea ref={textRef} value={textValue} onChange={onChangeText} placeholder='Добавить текст'/>
            </div>
            <button onClick={() => {
                addPost(postData)
            }}>dasd</button>
        </div>
    )
}


export default AddPost;