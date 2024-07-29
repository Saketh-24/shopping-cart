import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../state/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="max-w-fit mx-auto">
      <h3 className="text-3xl p-4">Cart</h3>
      <div className="cartContainer flex gap-11 flex-wrap items-center justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="cartCard p-10 flex flex-col justify-center items-center"
          >
            <img
              className="w-[200px] h-[200px]"
              src={product.image}
              alt="image"
            />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button
              onClick={() => handleRemove(product.id)}
              className="w-[250px] text-white p-4 bg-blue-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
