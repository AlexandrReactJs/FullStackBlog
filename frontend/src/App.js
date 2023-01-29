import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import FullpostContainer from './components/Fullpost/FullpostContainer';
import PostsContainer from './components/Posts/PostsContainer';
import PostsCategoryContainer from './components/PostsCategory/PostsCategoryContainer';
import { useSelector } from "react-redux";
import { postsSelector } from './Redux/Slices/PostsSlice';




function App() {
  const navigate = useNavigate();
  const location = useLocation()

  const {currentPage, pageSize, category} = useSelector(postsSelector)


  React.useEffect(() => {
    if (location.pathname === '/') {
      navigate(`/posts?page=${currentPage}&pageSize=${pageSize}&category=${category}`)
    }

  }, [navigate, location.pathname])


  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className='app-wrapper'>
        <Routes>
          <Route path='/posts' element={<PostsContainer />} />
          <Route path='/posts/:id' element={<FullpostContainer />} />
          <Route path='/postsCategory/:category' element={<PostsCategoryContainer/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
