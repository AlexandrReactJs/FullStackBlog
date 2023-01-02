import React from "react";
import Posts from "./Posts";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Redux/Slices/PostsSlice";
import { postsSelector } from "../../Redux/Slices/PostsSlice";

const PostsContainer = () => {
    const dispatch = useDispatch();
    const {currentPage, pageSize, category} = useSelector(postsSelector)

    React.useEffect(() => {
        dispatch(fetchPosts({currentPage, pageSize, category}))
    }, [dispatch, currentPage, pageSize, category])

    return(
        <Posts/>
        
    )
}


export default PostsContainer;