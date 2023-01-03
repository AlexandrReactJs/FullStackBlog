import React from "react";
import styles from './Posts.module.css';
import { useSelector } from "react-redux"
import Post from "./Post/Post";
import { postsSelector } from "../../Redux/Slices/PostsSlice";
import Pagination from "../Pagination/Pagination";
import { setCurrentPage } from "../../Redux/Slices/PostsSlice";


const Posts = () => {
    const { posts, totalCount, pageSize } = useSelector(postsSelector);

    return (
        <>
            <div className={styles.posts}>

                {
                    posts.map(el => <div className={styles.post}>

                        <Post createdAt={el.createdAt} tags={el.tags} title={el.title} text={el.text} viewCount={el.viewCount} imageUrl={el.imageUrl} postId={el._id} />
                    </div>)

                }


            </div>
            <Pagination totalCount={totalCount} pageSize={pageSize} setCurrentPage={setCurrentPage}/>
        </>
    )
}


export default Posts;