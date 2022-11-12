import React from 'react'
import {Link} from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <div>
        <Link to='/admin/posts'>Посты</Link>
        <Link to='/admin/addPost'>Добавить посты</Link>
    </div>
  )
}


export default AdminSidebar;
