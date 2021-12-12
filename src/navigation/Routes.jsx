import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import Main from '../pages/Main/Main';
import Menu from '../Components/Menu/Menu'



const RoutesMain = () => (
  <>
    <Menu />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default RoutesMain;