import React from "react";
import { shoes } from "../assets";
import { useNavigate } from "react-router-dom";

const BestSeller = (props) => {
  const {
    img,
    Category,
    Category_Des,
    Collection,
    Collection_Des,
    percentage,
  } = props;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/products")}
      className="relative w-full h-full p-6 flex gap-5 items-center cursor-pointer hover:shadow-2xl duration-300"
    >
      <span className="absolute top-0 right-0 bg-gray-800 text-white font-medium px-2 pb-0.5">
        Best Seller
      </span>
      <div>
        <img className="h-44 rounded-md" src={img} alt="img" />
      </div>
      <div className="space-y-5">
        <div>
          <h2 className="text-2xl font-bold">{Category}</h2>
          <p className="text-xl font-medium text-gray-600">{Category_Des}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">{Collection}</h2>
          <p className="text-lg text-gray-900 ml-4">{Collection_Des}</p>
        </div>
        <div className="text-lg font-bold text-white px-3 py-1 bg-gray-500 w-fit ">
          <p>Up to {percentage}% off</p>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
