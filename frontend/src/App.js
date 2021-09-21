import React from 'react';
import Home from './Components/pages/Home';
import ProductPage from './Components/pages/ProductPage'; //productlist adalah single page detailscreen dari product
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './Components/pages/ProductList';
import ScrollToTop from './Components/Stuff/ScrollToTop';
import Cart from './Components/pages/Cart';
import Login from './Components/pages/Login'
import Profile from './Components/pages/Profile';
import Shipping from './Components/pages/Shipping';
import Payment from './Components/pages/Payment';
import PlaceOrder from './Components/pages/PlaceOrder';
import Order from './Components/pages/Order';



function App() {
  return (
    <Router>
        <ScrollToTop/>
        <Route path='/login' component={Login}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/products/' component={ProductList} exact />
        <Route path='/products/item/:id' component={ProductPage} />
        <Route path='/cart/:id?' component={Cart}/>
        <Route path='/shipping' component={Shipping}/>
        <Route path='/payment' component={Payment}/>
        <Route path='/order/:id' component={Order}/>
        <Route path='/placeorder' component={PlaceOrder}/>
        <Route path='/' component={Home} exact/>
    </Router>
  );
}

export default App;
