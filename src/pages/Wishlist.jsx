import React, { useEffect, useState } from "react";
import Product_Card from "../components/Product_Card";
import { useDispatch, useSelector } from "react-redux";
import {
  dataState,
  removeFromWishList,
  setCart,
  setWishList,
} from "../redux/features/dataSlice";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  const data = useSelector(dataState);
  const wishlistData = data.wishList;

  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (!token) {
      navigate("/login");
    } else {
      if (product.inStock === true) {
        const isProductInCart = data.cart.some(
          (item) => item._id === product._id
        );

        if (isProductInCart) {
        } else {
          dispatch(setCart(product));
        }
      }
    }
  };

  const handleWishList = (product) => {
    if (!token) {
      navigate("/login");
    } else {
      if (data.wishList.some((item) => item._id === product._id)) {
        dispatch(removeFromWishList(product));
      } else {
        dispatch(setWishList(product));
      }
    }
  };

  return (
    <div className="w-full min-h-screen h-full px-8 flex justify-center bg-gray-100">
      <div className="w-full h-full py-20 gap-8 flex flex-col justify-start">
        <h1 className="text-center font-bold text-2xl text-gray-600">
          Your Wishlist
        </h1>
        <div className="w-full h-full gap-5 grid grid-cols-1 sm:grid-cols-2 3:grid-cols-3 2:grid-cols-4 1:grid-cols-5 place-content-center place-items-center">
          {wishlistData.map((item) => (
            <div key={item._id}>
              <Product_Card
                img={item.img}
                name={item.name}
                infoTitle={item.infoTitle}
                rating={item.rating}
                price={item.price}
                originalPrice={item.originalPrice}
                fastDelivery={item.fastDelivery}
                inStock={item.inStock}
                cartButton={item.inStock ? "Add to Cart" : "Out of Stock"}
                addToCart={() => handleAddToCart(item)}
                id={item._id}
                cart={data.cart}
                wishList={data.wishList}
                handleWishListClick={() => handleWishList(item)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
