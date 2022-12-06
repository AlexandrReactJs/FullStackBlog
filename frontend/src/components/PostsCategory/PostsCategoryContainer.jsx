import React from "react";
import Posts from "../Posts/Posts";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPosts } from "../../Redux/Slices/PostsSlice";

const PostsCategoryContainer = () => {
    const dispatch = useDispatch()

    const {category} = useParams();

    React.useEffect(() => {
        axios.get(`http://localhost:4444/postsCategory/${category}`).then((res) => {
          dispatch(setPosts(res.data))
        })
    }, [category])

    return(
        <Posts/>
    )
}


export default PostsCategoryContainer;