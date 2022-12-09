import React from 'react'
import styles from './Post.module.css'
import deleteIcon from '../../../../assets/icons/delete.png';
import editIcon from '../../../../assets/icons/edit.png'
import viewsIcon from '../../../../assets/icons/eye.png';
import axios from 'axios';
import { removePost } from '../../../../Redux/Slices/AdminSlices/AdminPostsSlice';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import renderHTML from 'react-render-html';


const Post = ({title, text, viewsCount, id, imageUrl}) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const JWTToken = document.cookie;
    const deletePost =  () => {
        axios.delete(`http://localhost:4444/posts/${id}`, { headers: { Authorization: "Bearer " + JWTToken } } ).then((res) => {
            if(res.data.statusCode === 0){
                dispatch(removePost(id))
            }
        })

    }

  return (
    <div className={styles.Post}>
        <div className={styles.postEditButtons}>
            <div className={styles.editPost}>
                <img onClick={() => {navigate(`/admin/postRefactoring/${id}`)}} src={editIcon} alt="" />
            </div>
            <div className={styles.deletePost}>
                <img onClick={() => {deletePost()}} src={deleteIcon} alt="" />
            </div>
        </div>
        <div className={styles.postTitle}>
            <h3>{title}</h3>
        </div>
        <div className={styles.postText}>
            
                {renderHTML(text)}
            
        </div>
        <img src={`http://localhost:4444${imageUrl}`} alt="img" />
        <div className={styles.postViews}>
            <img src={viewsIcon} alt="" />
            <p>
                {viewsCount}
            </p>
        </div>
    </div>
  )
}


export default Post;