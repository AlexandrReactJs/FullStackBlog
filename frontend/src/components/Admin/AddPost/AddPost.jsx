import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styles from './AddPost.module.css';
import { setPostText, setPostTitle, setImageUrl } from '../../../Redux/Slices/AdminSlices/AdminSlice';
import RichEditorExample from './Editor/Editor';


const AddPost = () => {
    const dispatch = useDispatch();

    const JWTToken = document.cookie;

    const titleValue = useSelector(state => state.adminSlice.addPostData.title)
    const textValue = useSelector(state => state.adminSlice.addPostData.text)
    const postData = useSelector(state => state.adminSlice.addPostData)
    const [file, setFile] = React.useState()


    const titleRef = React.useRef(null);

    const addPost = (body) => {
        axios.post('http://localhost:4444/posts', body, { headers: { Authorization: "Bearer " + JWTToken } }).then((res) => {
            console.log(res);
        })
    
    }

    const addImageUrl = (file) => {
        const formData = new FormData();
        formData.append('image', file)
        console.log(formData)
        axios.post('http://localhost:4444/upload', formData, { headers: {'Content-Type': 'application/x-www-form-urlencoded', Authorization: "Bearer " + JWTToken } }).then((res) => {
            dispatch(setImageUrl(res.data.url))
        }).catch(res => {console.log('*****', res)})
    }

    const onChangeTitle = () => {
        const text = titleRef.current.value;
        dispatch(setPostTitle(text));
    }


    const onChangeText = (text) => {
        /*const text = textRef.current.value;*/
        dispatch(setPostText(text))
    }

    const onChangeInput = (event) => {
        let file = event.target.files[0];
        console.log(file)
        setFile(file)
        
    }

    return (
        <div className={styles.addPost}>
            <div className={styles.addTitle}>
                <textarea ref={titleRef} value={titleValue} onChange= {onChangeTitle} placeholder='Добавить заголовок'/>
            </div>
            {/*<div className={styles.addTitle}>
                <textarea ref={titleRef} value={titleValue} onChange= {onChangeTitle} placeholder='Добавить заголовок'/>
            </div>
            <div className={styles.addText}>
                <textarea ref={textRef} value={textValue} onChange={onChangeText} placeholder='Добавить текст'/>
            </div>
            <div>
                <button className={styles.addPostButton} onClick={() => {addPost(postData)}}>Добавить</button>
    </div>*/}

                <RichEditorExample onChangeText={onChangeText} textValue={textValue}/>
                <input type="file" onChange={onChangeInput}/>
                <button onClick={() => {addImageUrl(file)}}>Add file</button>
                <div>
                <button className={styles.addPostButton} onClick={() => {addPost(postData)}}>Добавить</button>
                </div>
            
        </div>
    )
}


export default AddPost;