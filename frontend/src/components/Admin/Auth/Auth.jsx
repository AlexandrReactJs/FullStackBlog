import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { setIsAuth } from '../../../Redux/Slices/AdminSlice';
import { setAdminData } from '../../../Redux/Slices/AdminSlice';
import styles from './Auth.module.css';

const Auth = () => {
    const dispatch = useDispatch();

    

    const getLogin = (body) => {
        axios.post('http://localhost:4444/auth/login', body).then((res) => {
            if(res.data.statusCode === 0) {
                dispatch(setIsAuth(true));
                document.cookie = `${res.data.token}`;
            }
            
        })
    }


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            getLogin(values)

        },
    });

    return (
        <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />

            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />

            <button type="submit">Submit</button>
        </form>
    )
}

export default Auth;
