import React from "react";
import styles from './Posts.module.css';
import {useSelector} from "react-redux"
import Post from "./Post/Post";
import { postsSelector } from "../../Redux/Slices/PostsSlice";
import Pagination from "../Pagination/Pagination";

const Posts = () => {
    const {posts} = useSelector(postsSelector);

    return (
        <div className={styles.posts}>
            {
                posts.map(el => <div className={styles.post}>
                    
                    <Post createdAt={el.createdAt} tags={el.tags} title={el.title} text={el.text} viewCount={el.viewCount} imageUrl={el.imageUrl} postId={el._id}/>
                    
                </div>)
            }
            <Pagination/>
        </div>
    )
}


export default Posts;