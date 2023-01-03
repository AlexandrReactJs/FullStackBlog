import React from 'react'
import styles from './Posts.module.css'
import Post from './Post/Post';
import { fetchPosts } from '../../../Redux/Slices/AdminSlices/AdminPostsSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios"
import Pagination from '../../Pagination/Pagination';
import qs from 'qs';
import { setCurrentPage } from '../../../Redux/Slices/AdminSlices/AdminPostsSlice';

const Posts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const isMount = React.useRef(false);

    const {currentPage, pageSize, totalCount, category, adminPosts} = useSelector(state => state.adminPostsSlice)

    React.useEffect(() => {
        if (location.pathname === '/admin/posts' ) {
            navigate(`/admin/posts?page=${currentPage}&pageSize=${pageSize}&category=${category}`)
        }

    }, [navigate, location.pathname])


    React.useEffect(() => {
        if(window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(fetchPosts({...params})) 
        }
        console.log(window.location.search)
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



    if (!adminPosts) {
        return <>Загрузка ...</>
    } else {
        return (
            <>
                <div className={styles.Posts}>
                    {adminPosts.map(el => <Post id={el._id} title={el.title} text={el.text} viewsCount={el.viewCount} imageUrl={el.imageUrl} />)}
                </div>
                <Pagination totalCount={totalCount} pageSize={pageSize} setCurrentPage={setCurrentPage}/>
            </>
        )
    }


}


export default Posts;
