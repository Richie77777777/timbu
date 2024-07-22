import React from "react";
import { CartState } from "../contexts/ShoppingContext";
import { Link } from "react-router-dom";

function CheckOut() {
  const {
    produce: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="w-4/5 min-h-96 m-auto">
      {cart.length ? (
        <div>
          {" "}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex bg-orange-200 m-2 rounded-lg items-center justify-between md:w-[500px]"
            >
              <div className="h-24 w-24 grid place-content-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="max-w-full h-24"
                />
              </div>
              <div className="p-5 space-y-2">
                <h2 className="font-bold font-serif text-xl">{item.name}</h2>
                <h3>{item.price}</h3>
                <button
                  onClick={() => {
                    localStorage.setItem('cart', JSON.stringify(cart))
                    dispatch({ type: "REMOVE_FROM_CART", payload: item });
                  }}
                  className="bg-red-500 text-white px-2 py-1 rounded-lg border border-white"
                >
                  Remove
                </button>
              </div>
              <div className="flex space-x-1 mr-3">
                <button
                  onClick={() => {
                    localStorage.setItem('cart', JSON.stringify(cart))
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: { id: item.id, qty: item.qty + 1 },
                    });
                  }}
                  className=" text-xl font-bold border border-brandbrown px-2 rounded-lg text-white"
                >
                  +
                </button>
                <h3 className="text-brandbrown text-2xl font-serif">
                  {item.qty}
                </h3>
                <button
                  onClick={() => {
                    localStorage.setItem('cart', JSON.stringify(cart))
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: { id: item.id, qty: item.qty - 1 },
                    });
                  }}
                  className=" text-xl font-bold border border-brandbrown px-2 rounded-lg text-white"
                >
                  -
                </button>
              </div>
            </div>
          ))}
          <div className=" text-2xl text-brandbrown font-serif my-3">
            Total: {cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0)} NGN
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-brandbrown space-y-5 h-96">
          <h2 className="font-bold font-serif text-3xl">Cart is empty</h2>
          <p>
            {" "}
            Click{" "}
            <Link to="/" className="underline">
              here
            </Link>{" "}
            to see products
          </p>
        </div>
      )}
    </div>
  );
}

export default CheckOut;
