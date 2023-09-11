import React, { useState } from "react";
import Filter from "../components/Filter";
import Product_Card from "../components/Product_Card";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/features/dataSlice";
import axios from "axios";

const Products = () => {
  const dispatch = useDispatch();

  // const res = dispatch(fetchData);

  const [productList, setProductList] = useState([]);

  const fetchProducts = () =>
    axios.get("/api/products").then((product) => {
      setProductList(product.data.products);
    });

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full min-h-screen h-full px-8 flex justify-center bg-gray-100">
      <div className="w-full h-full py-20 gap-5 flex">
        <div className="">
          <Filter />
        </div>
        <div className="w-full h-full gap-5 grid grid-cols-auto">
          {productList.map((item) => (
            <div key={item._id}>
              <Product_Card
                img={item.img}
                name={item.name}
                infoTitle={item.infoTitle}
                rating={item.rating}
                price={item.price}
                fastDelivery={item.fastDelivery}
                inStock={item.inStock}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
