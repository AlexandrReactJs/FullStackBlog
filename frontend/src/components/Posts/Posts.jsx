import React from "react";
import styles from './Posts.module.css';
import axios from 'axios';
import { setPosts } from "../../Redux/Slices/PostsSlice";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux"

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postsSlice.posts);

    React.useEffect(() => {
        axios.get('http://localhost:4444/posts').then((res) => {
            dispatch(setPosts(res.data));
        })
    }, [])

    return (
        <div>
            {
                posts.map(el => <div><h1>{el.title}</h1> <div><h3>{el.text}</h3></div></div>)
            }
        </div>
    )
}


export default Posts;