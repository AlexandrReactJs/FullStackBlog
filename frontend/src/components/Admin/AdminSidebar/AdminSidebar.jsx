import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const AdminSidebar = () => {

  const { currentPage, pageSize, category } = useSelector(state => state.adminPostsSlice)

  return (
    <div>
        <Link to={`/admin/posts?page=${currentPage}&pageSize=${pageSize}&category=${category}`}>Посты</Link>
        <Link to='/admin/addPost'>Добавить посты</Link>
    </div>
  )
}


export default AdminSidebar;
