import React from "react";
import styles from './Posts.module.css';
import axios from 'axios';
import { setPosts } from "../../Redux/Slices/PostsSlice";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux"
import Post from "./Post/Post";
import {Link} from 'react-router-dom'

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postsSlice.posts);

    React.useEffect(() => {
        axios.get('http://localhost:4444/posts').then((res) => {
            dispatch(setPosts(res.data));
        })
    }, [dispatch])

    return (
        <div className={styles.posts}>
            {
                posts.map(el => <div>
                    <Link to={`/posts/${el._id}`}>
                    <Post title={el.title} text={el.text} viewCount={el.viewCount}/>
                    </Link>
                </div>)
            }
        </div>
    )
}


export default Posts;