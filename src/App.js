// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductList from './componenets/productList';
import { Header } from './shared/components/header';

function App() {
  return (
    <Header/>
  );
}

export default App;
