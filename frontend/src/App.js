import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Sidebar from './components/Sidebar/Sidebar';
import FullpostContainer from './components/Fullpost/FullpostContainer';
import PostsContainer from './components/Posts/PostsContainer';

function App() {
  const navigate = useNavigate();
  const location = useLocation()

  React.useEffect(() => {
    if(location.pathname === '/') {
      navigate('/posts')
    }
    
  }, [navigate, location.pathname])


  return (
    <div className="App">
      <Header/>
      <div className='app-wrapper'>
        <Routes>
          <Route path='/posts' element={<PostsContainer/>}/>
          <Route path='/admin/*' element={<Admin/>}/>
          <Route path='/posts/:id' element={<FullpostContainer/>}/>
        </Routes>
    
        <Sidebar/>
      
        
      </div>
    </div>
  );
}

export default App;
