import React from "react";
import styles from './Pagination.module.css'
import { useDispatch } from "react-redux";
import nextPrevBt from '../../assets/icons/next-prev-bt.png'





const Pagination = ({ totalCount, pageSize, setCurrentPage }) => {

    const dispatch = useDispatch()

    let pageCount = Math.ceil(totalCount / pageSize)
    let pages = []
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        console.log('доскролил')
     }

    return (
        <div className={styles.Pagination}>
            <button className={styles.prevBt}><img src={nextPrevBt} alt="Previous" /></button>
            <div className={styles.paginationWrapper}>
                <div className={styles.pagesBt}>{pages.map((el, i) => <p key={i} className={styles.pageCount} onClick={() => { dispatch(setCurrentPage(el)) }}>{el}</p>)}</div>
            </div>
            <button className={styles.nextBt}><img src={nextPrevBt} alt="Next" /></button>
        </div>
    )
}

export default Pagination