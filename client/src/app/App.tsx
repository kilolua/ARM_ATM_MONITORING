import React, { FC } from 'react'
import './App.css';
import { observer } from 'mobx-react-lite';
import Main from '../pages/main/Main';
import Footer from '../entities/footer/Footer';
import Header from '../entities/header/Header';

const App : FC = () => (
  <div className="page-root">
    <Header />
    <Main />
    {/*<Footer />*/}
  </div>
);

export default observer(App);
