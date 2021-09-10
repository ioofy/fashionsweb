import React from 'react';
import Home from './Components/pages/Home';
import ProductPage from './Components/pages/ProductPage'; //productlist adalah single page detailscreen dari product
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './Components/pages/ProductList';



function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact/>
      <Route path='/products/item/:id' component={ProductPage} />
      <Route path='/products/' component={ProductList} exact />
    </Router>
  );
}

export default App;
