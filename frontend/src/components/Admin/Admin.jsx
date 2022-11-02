import React from 'react'
import Auth from './Auth/Auth';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import AddPost from './AddPost/AddPost';
import { setAdminData, setIsAuth } from '../../Redux/Slices/AdminSlice';

const Admin = () => {
    const disptach = useDispatch();
    const isAuth = useSelector(state => state.adminSlice.isAuth);
    const JWTToken = document.cookie;
    React.useEffect(() => {
        axios.get('http://localhost:4444/auth/me', {headers: {Authorization: "Bearer " + JWTToken}}).then((res) => {
        if(res.data.statusCode === 0){
            disptach(setAdminData(res.data));
           /* disptach(setIsAuth(true))*/
        }
        

    })
    }, [])

  return (
    <div>
        {
            isAuth ? <AddPost/> : <Auth/>
        }
    </div>
  )
}


export default Admin;
