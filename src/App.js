
import { BrowserRouter as Router,   Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Products from './components/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Navigation from './components/navigation';
import {CartContext} from './pages/CartContext';
import { useEffect, useState } from 'react';
import { getCart,storeCart } from './pages/helpers';




const App = () =>{
    const [ cart, setCart ]=useState({});
    // local storage
    useEffect(()=>{
        getCart().then(cart=>{
            setCart(JSON.parse(cart));
        });
       
       
    },[]);
    useEffect(()=>{
        storeCart(JSON.stringify(cart));
       
    },[cart]);

    return (
        <>
            <Router>
                <CartContext.Provider value={{cart,setCart}}>
                  <Navigation />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    {/* <Route path="/About" component={About}></Route> */}
                    <Route path="/products"  element={<Products />}/>
                    <Route path="/products/:_id"  element={<SingleProduct/>}/>
                    <Route path="/cart" element={<Cart/>}/>

                </Routes>
                </CartContext.Provider>
            </Router>
        </>
    )
}
export default App;