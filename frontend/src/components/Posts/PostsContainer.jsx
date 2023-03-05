import React from "react";
import Posts from "./Posts";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { fetchPosts } from "../../Redux/Slices/PostsSlice";
import { postsSelector} from "../../Redux/Slices/PostsSlice";
import qs from 'qs';
import Preloader from "../Preloader/Preloader";
import styles from '../Posts/Posts.module.scss'

const PostsContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {currentPage, pageSize, category, status} = useSelector(postsSelector)


    const isMount = React.useRef(false);


    React.useEffect(() => {
        if(window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(fetchPosts({...params})) 
        }
    }, [dispatch, window.location.search])


    React.useEffect(() => {
        if(isMount.current) {
            const queryString = qs.stringify({
                page: currentPage,
                pageSize,
                category
            })

            navigate(`?${queryString}`)
        }

        isMount.current = true
    }, [currentPage, pageSize, category, navigate])



    if(status === 'Loading'){
        return <div className={styles.posts}>{[...new Array(4)].map((_, i)  => <Preloader key = {i}/>)}</div>
    }

    return(
        <Posts/>
        
    )
}


export default PostsContainer;