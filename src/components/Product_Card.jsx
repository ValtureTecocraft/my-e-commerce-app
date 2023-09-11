import React from "react";
import Rating from "@mui/material/Rating";

const Product_Card = (props) => {
  const { img, name, infoTitle, rating, price, fastDelivery, inStock } = props;

  return (
    <div className="w-[272px] h-[420px] flex flex-col justify-between duration-300 hover:shadow-2xl cursor-pointer rounded-md overflow-hidden">
      <div className="h-full overflow-hidden flex justify-start items-start">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="product_img"
        />
      </div>

      <div className="p-5 pb-0 space-y-1">
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
      <button
        className={`w-full py-2 font-bold ${
          inStock
            ? "bg-gray-500 text-white"
            : "bg-gray-300 text-black cursor-default"
        }`}
      >
        {inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};

export default Product_Card;
