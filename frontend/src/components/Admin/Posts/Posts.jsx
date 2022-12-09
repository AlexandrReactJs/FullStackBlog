import React from 'react'
import styles from './Posts.module.css'
import Post from './Post/Post';
import { setPosts } from '../../../Redux/Slices/AdminSlices/AdminPostsSlice'
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios"


const Posts = () => {
    const dispatch = useDispatch();

    const posts = useSelector(state => state.adminPostsSlice.adminPosts)

    React.useEffect(() => {
        axios.get('http://localhost:4444/posts').then((res) => {
            debugger
            dispatch(setPosts(res.data));
        })
    }, [dispatch])

    if(!posts){
        return <>Загрузка ...</>
    }else{
        return (
            <div className={styles.Posts}>
                {posts.map(el => <Post id={el._id} title={el.title} text={el.text} viewsCount={el.viewCount} imageUrl={el.imageUrl}/>)}
            </div>
          )
    }

  
}


export default Posts;
