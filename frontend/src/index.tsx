import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux/store'
import Admin from './components/Admin/Admin';

const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/*' element = {<App/>}/>
          <Route path='/admin/*' element={<Admin/>}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  
);


reportWebVitals();
