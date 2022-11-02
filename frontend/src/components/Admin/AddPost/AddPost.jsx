import React from 'react';
import { useFormik } from 'formik';
import {useSelector} from 'react-redux';
import axios from 'axios';

const AddPost = () => {
    const JWTToken = useSelector(state => state.adminSlice.adminData.token)

    const addPost = (body) => {
        axios.post('http://localhost:4444/posts', body, {headers: {Authorization: "Bearer " + JWTToken}}).then((res) => {

            console.log(
                res
            )    
        })
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            text: '',
            
        },
        onSubmit: values => {
            addPost(values)

        },
    });
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Title</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />

            <label htmlFor="text">text</label>
            <input
                id="text"
                name="text"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.text}
            />

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}


export default AddPost;