import React from "react";
import styles from './Pagination.module.scss'
import { useAppDispatch } from "../../hooks";


interface IMyProps {
    pageSize: number;
    setPageSize: any
}


const Pagination: React.FC<IMyProps> = ({ pageSize, setPageSize }) => {

    const dispatch = useAppDispatch()

    if(!pageSize){console.log('err')}

    return (
        <div className={styles.Pagination}>
            <button onClick={() => { dispatch(setPageSize(pageSize + 4)) }}>Показать ещё</button>
        </div>
    )
}

export default Pagination