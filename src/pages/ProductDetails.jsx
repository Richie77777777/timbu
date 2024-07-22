// import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import products from "../product.json";
import { IoIosStarHalf, IoIosStar } from "react-icons/io";
import { CartState } from "../contexts/ShoppingContext";


function ProductDetails() {
  const { id } = useParams();
  const obj = products.find((i) => i.id === parseInt(id));
  const {produce: {cart}, dispatch} = CartState()
 

  return (
    <div>
      <div className="container m-auto py-10">
        <div className="md:flex space-y-3 items-center space-x-8 ">
          <div className="p-7 rounded-xl bg-brandteal/10 shadow-sm w-80 h-80 grid place-content-center border-3 border-white m-auto">
            {obj && <img src={obj.img} alt={obj.name} />}
          </div>

          <div>
            <div className="text-4xl font-serif text-brandbrown font-bold">
              {obj.name} |{obj.category} | {obj.ach_percent} | {obj.litre}
            </div>

            <div>
              <div className="flex text-amber-500 space-x-2 my-3 items-end text-xl">
                <h3 className="font-serif font-bold text-black">
                  {obj.rating}
                </h3>
                <IoIosStar className="" />
                <IoIosStar className="" />
                <IoIosStar className="" />
                <IoIosStar className="" />
                <IoIosStarHalf className="" />

                <small className="text-sm text-slate-600 ml-10">
                  (5 reviews)
                </small>
              </div>

              <div className="text-xl mt-10 font-serif text-brandbrown font-bold flex justify-between">
                <p>{obj.price} NGN</p>
                <div>
                  {cart.some(c=>c.id===obj.id)?<button 
                  onClick={()=>{
                    localStorage.setItem('cart', JSON.stringify(cart))
                    dispatch({type: 'REMOVE_FROM_CART',payload: obj})}}
                  className="text-sm text-white border rounded-full px-5 
                py-2 font-sans font-thin bg-red-500 transition-all duration-300 ease-in-out
                hover:text-red-500 hover:border hover:bg-transparent ">

                    Remove from cart
                  </button>:<button

                  onClick={()=>{
                    localStorage.setItem('cart', JSON.stringify(cart))
                    dispatch({type: 'ADD_TO_CART',payload: obj})}}
                    className="text-sm text-white border rounded-full px-5 
                py-2 font-sans font-thin bg-brandbrown transition-all duration-300 ease-in-out
                hover:text-brandbrown hover:border hover:bg-transparent "
                  >
                    Add to cart
                  </button>}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* other content */}
        <div className="py-14 text-brandbrown">
          <h2 className="font-bold text-xl  mb-8">Product Description</h2>
          <p>
            Experience the harmonious blend of tradition and modern winemaking
            with Four Cousins Red Wine. Crafted with care and passion in the
            picturesque vineyards of South Africa, this wine represents a
            perfect fusion of quality, heritage, and innovation.
          </p>
          <ul className="my-5 list-disc px-8 space-y-4">
            <li>
              <p>
                <span className="font-bold"> Flavor Profile:</span> A delightful
                blend of ripe red berries, dark plums, and subtle hints of
                spice. Aromas of fresh cherries, raspberries, and vanilla.
                Medium-bodied with smooth tannins and a lingering, velvety
                finish.
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Pairing Suggestions:</span> Pairs
                beautifully with grilled meats, hearty pastas, aged cheeses, and
                rich chocolate desserts.
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Vineyard and Winemaking:</span>{" "}
                Produced in Robertson Valley, South Africa. Hand-harvested
                grapes, sustainable winemaking practices, and careful
                fermentation for balanced complexity.
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Versatility:</span> Perfect for
                dinner parties, special celebrations, or casual relaxation.
                Approachable style suitable for both wine enthusiasts and casual
                drinkers. Bottle
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Bottle Size:</span> 750ml
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">Country of Origin:</span> South
                Africa
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
