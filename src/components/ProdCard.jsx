import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { PiStarFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { CartState } from "../contexts/ShoppingContext";
import { MdReadMore } from "react-icons/md";

function ProdCard(product ) {

  const {id, name, img, price, rating, category, ach_percent, litre} = product
    const {produce: {cart}, dispatch} = CartState()
    console.log(cart)

  return (
    <div>
      <div className="bg-brandteal/20 rounded-lg shadow-md p-1">
        <div className="p-4 grid place-content-center">
          <img
            src={img}
            alt={name}
            className=" h-24  md:w-full md:h-60 object-contain rounded-t-lg"
          />
        </div>{" "}
        <div className="p-4 font-serif bg-brandbg rounded-md">
          <h2 className="  font-bold text-brandbrown font-serif">
            {name} | {category} | {ach_percent} | {litre}
          </h2>
          <div className="flex justify-between items-center">
            <p className="text-brandbrown text-sm md:text-xl">{price} NGN</p>
            <div>
              <p className="flex items-end space-x-1">
                {rating} <PiStarFill className="text-yellow-400" />
              </p>
              <Link to={`/product/${id}`}>
                <button 
                className="bg-none text-brandbrown border border-brandbrown grid place-content-center w-8 h-8 rounded-full mt-2 hover:bg-brandbrown hover:text-white">
                  <MdReadMore className="inline-block" />
                </button>
              </Link>
             {cart.some(c=>c.id===product.id)?<button 
                onClick={()=>{
                  localStorage.setItem('cart', JSON.stringify(cart))
                  return dispatch({type: 'REMOVE_FROM_CART',payload: product})}}
                className="bg-red-600 text-white font-sans border border-brandbrown grid place-content-center w-8 h-8 rounded-full mt-2 hover:bg-red-400 hover:text-white">
                  X
                </button>:<button 
                onClick={()=>{
                localStorage.setItem('cart', JSON.stringify(cart))
                 return dispatch({type: 'ADD_TO_CART',payload: product})}
              }
                className="bg-none text-brandbrown border border-brandbrown grid place-content-center w-8 h-8 rounded-full mt-2 hover:bg-brandbrown hover:text-white">
                  <IoCartOutline className="inline-block" />
                </button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdCard;
