import React from "react";
import styles from './Posts.module.css';
import {useSelector} from "react-redux"
import Post from "./Post/Post";
import {Link} from 'react-router-dom'
import { postsSelector } from "../../Redux/Slices/PostsSlice";

const Posts = () => {
    const posts = useSelector(postsSelector);

    return (
        <div className={styles.posts}>
            {
                posts.map(el => <div className={styles.post}>
                    <Link to={`/posts/${el._id}`}>
                    <Post title={el.title} text={el.text} viewCount={el.viewCount} imageUrl={el.imageUrl}/>
                    </Link>
                </div>)
            }
        </div>
    )
}


export default Posts;