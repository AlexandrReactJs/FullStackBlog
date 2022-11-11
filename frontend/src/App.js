import './App.css';
import React from 'react';
import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Sidebar from './components/Sidebar/Sidebar';
import Fullpost from './components/Fullpost/Fullpost';

function App() {
  const navigate = useNavigate();
  const location = useLocation()

  React.useEffect(() => {
    if(location.pathname === '/') {
      navigate('/posts')
    }
    
  }, [])

  return (
    <div className="App">
      <Header/>
      <div className='app-wrapper'>
        <Routes>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/posts/:id' element={<Fullpost/>}/>
        </Routes>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
