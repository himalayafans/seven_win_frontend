import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Space } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import SiteContent from './layout/SiteContent';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <SiteContent></SiteContent>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
