import React from "react";
import Posts from "./Posts";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../Redux/Slices/PostsSlice";

const PostsContainer = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return(
        <Posts/>
    )
}


export default PostsContainer;