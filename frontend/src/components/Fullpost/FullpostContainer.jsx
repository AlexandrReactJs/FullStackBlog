import React from "react";
import Fullpost from "./Fullpost";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchFullPost } from '../../Redux/Slices/FullPostSlice';


const FullpostContainer = () => {
    const dispatch = useDispatch();
    const postData = useSelector(state => state.fullPostSlice.postData);
    const { id } = useParams();

        React.useEffect(() => {
            dispatch(fetchFullPost(id))
        }, [dispatch, id]);


    return(
        <Fullpost postData={postData}/>
    )
}



export default FullpostContainer;

