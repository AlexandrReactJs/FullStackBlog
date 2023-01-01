import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTag, removeTag } from '../../../../Redux/Slices/AdminSlices/AdminSlice'
import styles from './AddTag.module.css'
import cancelIcon from '../../../../assets/icons/cancel.png'


const AddTag = () => {
    const dispatch = useDispatch();

    const postData = useSelector(state => state.adminSlice.addPostData)

    const addTagRef = React.useRef(null);

    return (
        <div className={styles.addTagWrapper}>
            <div className={styles.tags}>
                {
                    postData.tags.map(el =>
                        <div className={styles.tag}>
                            <p>{el}</p>
                            <div className={styles.removeTag} onClick={() => {dispatch(removeTag(el))}}>
                                <img src={cancelIcon} alt="" />
                            </div>
                        </div>
                        
                    )
                }
            </div>
            <div className={styles.addTag}>
                <textarea ref={addTagRef}></textarea>
                <button onClick={() => { dispatch(addTag(addTagRef.current.value)) }}>Add Tag</button>
            </div>
        </div>
    )
}


export default AddTag;
