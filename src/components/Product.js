import { Link } from "react-router-dom";
import {useContext,useState} from "react";
import {CartContext} from "../pages/CartContext";


const Product = (props) => {
  const[isAdding,setIsAdding]=useState(false);
  const{cart,setCart} =useContext(CartContext);
  const { ProductOp} = props;

  const addToCart =(event,ProductOp)=>{
    event.preventDefault();
    let _cart = {...cart};
      if (!_cart.items){
        _cart.items={}
      }
      if(_cart.items[ProductOp._id]){
        _cart.items[ProductOp._id]+=1;
      }
      else{
        _cart.items[ProductOp._id]=1;
      }
      if(!_cart.totalItems){
        _cart.totalItems=0;
      }
      _cart.totalItems +=1;
      setCart(_cart);
      setIsAdding(true);
      setTimeout(()=>{
              setIsAdding(false);
      },1000);

  }
  return (
    <Link to={`/products/${ProductOp._id}`} >
    <div>
    <img src={ProductOp.image} alt="pizza" />
    <div className="text-center">
    <h2 className="text-lg font-bold py-2">{ProductOp.name}</h2>
    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{ProductOp.size}</span>
    </div>
    <div className="flex justify-between items-center mt-4">
        <span>₹ {ProductOp.Price}</span>
        <button disabled={isAdding} onClick={(e)=>{addToCart(e,ProductOp)}} className={` ${ isAdding ? 'bg-green-500' : 'bg-yellow-500' } py-1 px-4 rounded-full font-bold`}>ADD{ isAdding ? 'ED' : ''}</button>
    </div>
    </div>
    </Link>
)
}

export default Product;