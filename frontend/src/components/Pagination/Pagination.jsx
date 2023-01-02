import React from "react";
import styles from './Pagination.module.css'
import { useSelector, useDispatch } from "react-redux";
import { postsSelector } from "../../Redux/Slices/PostsSlice";
import { setCurrentPage } from "../../Redux/Slices/PostsSlice";


const Pagination = () => {
    const dispatch = useDispatch()
    const {totalCount,  pageSize} = useSelector(postsSelector)
    
    let pageCount = Math.ceil(totalCount / pageSize)
    let pages = []

    for(let i = 1; i <= pageCount; i++){
        pages.push(i)
    }

    return(
        <div className={styles.Pagination}>
            {pages.map(el => <p onClick={() => {dispatch(setCurrentPage(el))}}>{el}</p>)}
        </div>
    )
}

export default Pagination