import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AddPost = () => {
    const JWTToken = useSelector(state => state.adminSlice.adminData.token)

    const addPost = (body) => {
        axios.post('http://localhost:4444/posts', body, { headers: { Authorization: "Bearer " + JWTToken } }).then((res) => {

            console.log(
                res
            )
        })
    
    }

    return (
        <div>
            <div>
                <textarea/>
            </div>
            <div>
                <textarea/>
            </div>
        </div>
    )
}


export default AddPost;