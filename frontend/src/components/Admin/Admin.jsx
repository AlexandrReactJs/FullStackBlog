import React from 'react'
import styles from './Admin.module.css';
import Auth from './Auth/Auth';
import axios from 'axios';
import Posts from './Posts/Posts';
import { useSelector, useDispatch } from 'react-redux';
import { setAdminData, setIsAuth } from '../../Redux/Slices/AdminSlices/AdminSlice';
import { Routes, Route } from 'react-router-dom';
import AddPost from './AddPost/AddPost';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import RefactoringPost from './RefactoringPost/RefactoringPost';


const Admin = () => {
    const disptach = useDispatch();

    
    const isAuth = useSelector(state => state.adminSlice.isAuth);
    const JWTToken = document.cookie;
    React.useEffect(() => {
        axios.get('http://localhost:4444/auth/me', { headers: { Authorization: "Bearer " + JWTToken } }).then((res) => {
            if (res.data.statusCode === 0) {
                disptach(setAdminData(res.data));
                disptach(setIsAuth(true))
            }


        })
    }, [JWTToken, disptach])



    return (
        <>
            {
                isAuth ?
                    <div className={styles.admin}>
                        <div className={styles.nav}>
                            <AdminSidebar />
                        </div>
                        <div className={styles.adminWrapper}>

                            <Routes>
                                <Route path='/addPost' element={<AddPost />} />
                                <Route path={`/posts`} element={<Posts />} />
                                <Route path='/postRefactoring/:id' element={<RefactoringPost />} />
                            </Routes>

                        </div>
                    </div> : <Auth />
            }
        </>
    )
}


export default Admin;
