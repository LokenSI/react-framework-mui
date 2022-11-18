import React from 'react';
import ReactDOM from 'react-dom/client';
import './global/styleSheet.css';
import Main from './main';
import TopBar from './global/topbar/topbar';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme } from '@mui/material';

// Set up router and recoil.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      {/* <TopBar /> */}
      <Router>
        <Routes>
          <Route path="/*" element={<Main />}/>
          <Route path="/about" element={<Main />}/>
        </Routes>
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
