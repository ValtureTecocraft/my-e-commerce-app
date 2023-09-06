import axios from "axios";
import React, { useState } from "react";
import { staticCategory } from "../constants/data";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/authSlice";

function Home() {
  const currentUser = useSelector(selectUser);
  const [productList, setProductList] = useState([]);

  const fetchProducts = () =>
    axios.get("/api/products").then((product) => {
      setProductList(product.data.products);
    });

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen h-full pt-20 gap-5 flex flex-col items-center bg-gray-100">
        <section className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
          {staticCategory.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer hover:scale-110 duration-300"
            >
              <img className="w-[180px] rounded-lg" src={item.img} />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Home;
