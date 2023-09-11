import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Product_Card = (props) => {
  const {
    img,
    name,
    infoTitle,
    rating,
    price,
    fastDelivery,
    cartButton,
    addToCart,
    inStock,
    id,
    cart,
    wishList,
    handleWishListClick,
  } = props;

  const navigate = useNavigate();

  return (
    <div className="relative w-[272px] h-[480px] flex flex-col justify-between duration-300 hover:shadow-2xl cursor-pointer rounded-md overflow-hidden">
      <div className="h-full overflow-hidden flex justify-start items-start">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="product_img"
        />
      </div>

      <div
        onClick={handleWishListClick}
        className="absolute top-2 right-2 text-2xl text-red-500"
      >
        {wishList.some((item) => item._id === id) ? (
          <AiFillHeart />
        ) : (
          <AiOutlineHeart />
        )}
      </div>

      <div className="px-5 py-2 space-y-1">
        <h2 className="text-xl font-bold tracking-wider">{name}</h2>
        <p className="w-full font-medium truncate">{infoTitle}</p>
        <Rating
          className="text-black"
          name="read-only"
          value={rating}
          readOnly
        />
        <p className="font-semibold">₹ {price}</p>
        <p className="font-light">
          {fastDelivery ? "Fast Delivery" : "5 Days Delivery"}
        </p>
      </div>

      {cart.some((cart) => cart._id === id) ? (
        <button
          onClick={() => navigate("/cart")}
          className={`w-full py-2 font-bold bg-gray-400 text-white`}
        >
          Go to Cart
        </button>
      ) : (
        <button
          onClick={addToCart}
          className={`w-full py-2 font-bold ${
            inStock
              ? "bg-gray-500 text-white"
              : "bg-gray-300 text-black cursor-default"
          }`}
        >
          {cartButton}
        </button>
      )}
    </div>
  );
};

export default Product_Card;
