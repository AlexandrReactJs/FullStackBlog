import React from "react";
import styles from './RefactoringPost.module.css';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPostData } from "../../../Redux/Slices/AdminSlices/AdminRefactoringPostSlice";
import { setPostTitle } from "../../../Redux/Slices/AdminSlices/AdminRefactoringPostSlice";
import { setPostText } from "../../../Redux/Slices/AdminSlices/AdminRefactoringPostSlice";

const RefactoringPost = () => {
    const dispatch = useDispatch();
    const JWTToken = document.cookie;

    const {id} = useParams();
    React.useEffect(() => {
        axios.get(`http://localhost:4444/posts/${id}`).then((res) => {
            dispatch(setPostData(res.data))
        })
    }, [dispatch, id])

    const postData = useSelector(state => state.adminRefactoringPostSlice.postData)

    const titleRef = React.useRef(null);
    const textRef = React.useRef(null)

    const changeTitlePost = () => {
        let text = titleRef.current.value;
        dispatch(setPostTitle(text))
    }

    const changeTextPost = () => {
        let text = textRef.current.value;
        dispatch(setPostText(text))
    }


    const fetchChangedPost = () => {
        axios.patch(`http://localhost:4444/posts/${id}`, postData, { headers: { Authorization: "Bearer " + JWTToken } }).then((res) => {
            console.log(res)
        })
    }

    return(
        <div className={styles.addPost}>
            <div className={styles.addTitle}>
                <textarea ref={titleRef} onChange={changeTitlePost} value={postData.title}/>
            </div>
            <div className={styles.addText}>
                <textarea ref={textRef} onChange={changeTextPost} value={postData.text}/>
            </div>
            <div>
                <button onClick={fetchChangedPost} className={styles.addPostButton}>Изменить</button>
            </div>
        </div>
    )
}


export default RefactoringPost;