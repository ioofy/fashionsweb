import React from 'react';
import Home from './Components/pages/Home';
import ProductPage from './Components/pages/ProductPage';
import ProductList from './Components/pages/ProductList';
import ScrollToTop from './Components/Stuff/ScrollToTop';
import Cart from './Components/pages/Cart';
import Login from './Components/pages/Login'
import Profile from './Components/pages/Profile';
import Shipping from './Components/pages/Shipping';
import Payment from './Components/pages/Payment';
import PlaceOrder from './Components/pages/PlaceOrder';
import Order from './Components/pages/Order';
import UserList from './Components/pages/UserList';
import UserEdit from './Components/pages/UserEdit';
import ProductDashboard from './Components/pages/ProductDashboard';
import ProductEdit from './Components/pages/ProductEdit';
import OrderList from './Components/pages/OrderList';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <ScrollToTop/>
        <Route path='/login/accountcontext=register/auth/lang=en' component={Login}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/products/' component={ProductList} exact />
        <Route path='/products/item/:id' component={ProductPage} />
        <Route path='/cart/:id?' component={Cart}/>
        <Route path='/shipping' component={Shipping}/>
        <Route path='/payment' component={Payment}/>
        <Route path='/order/:id' component={Order}/>
        <Route path='/placeorder' component={PlaceOrder}/>
        <Route path='/admin/userlist' component={UserList}/>
        <Route path='/admin/orderlist' component={OrderList}/>
        <Route path='/admin/productlist' component={ProductDashboard}/>
        <Route path='/admin/user/:id/edit' component={UserEdit}/>
        <Route path='/admin/product/:id/edit' component={ProductEdit}/>
        <Route path='/' component={Home} exact/>
    </Router>
  )
}

export default App;
