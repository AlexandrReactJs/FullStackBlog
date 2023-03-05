import React from "react";
import styles from './Posts.module.scss';
import Post from "./Post/Post";
import { postsSelector } from "../../Redux/Slices/PostsSlice";
import Pagination from "../Pagination/Pagination";
import { setPageSize } from "../../Redux/Slices/PostsSlice";
import { useAppSelector } from "../../hooks";



const Posts: React.FC = () => {
    const { posts, pageSize, } = useAppSelector(postsSelector);


    return (
        <>
            <div className={styles.posts}>
                {
                    posts.map((el, i) => <div key={i} className={styles.post}>

                        <Post createdAt={el.createdAt} tags={el.tags} title={el.title} text={el.text} imageUrl={el.imageUrl} postId={el._id} />
                    </div>)

                }


            </div>
            
            <Pagination pageSize={pageSize} setPageSize={setPageSize} />
        </>
    )
}


export default Posts;