import React, { useEffect, useState } from "react";
import { staticCategory } from "../constants/data";
// import { useSelector } from "react-redux";
// import { selectUser } from "../redux/features/authSlice";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import { seller, shoes } from "../assets";
import axios from "axios";

function Home() {
  // const currentUser = useSelector(selectUser);

  // console.log(currentUser);

  const [categoriesList, setCategoriesList] = useState([]);

  const fetchProducts = () =>
    axios.get("/api/categories").then((cat) => {
      setCategoriesList(cat.data.categories);
    });

  // console.log(categoriesList);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen h-full flex flex-col items-center bg-gray-100">
        <div className="max-w-7xl w-full h-full py-20 gap-10 flex flex-col items-center">
          <section className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {staticCategory.map((item) => (
              <Link
                to={"/products"}
                key={item.id}
                className="cursor-pointer hover:scale-110 duration-300"
              >
                <img className="w-[180px] rounded-lg" src={item.img} />
              </Link>
            ))}
          </section>

          <div className="h-[2px] my-12 w-full flex justify-center items-center bg-red-950">
            <span className="bg-white text-4xl text-red-900 font-bold tracking-widest px-5 py-2">
              NEW LAUNCH
            </span>
          </div>

          <section className="w-full">
            <Banner />
          </section>

          <section className="w-full h-fit grid grid-cols-2 bg-white divide-x-4 shadow-lg">
            <BestSeller
              img={shoes}
              Category={"Shoes"}
              Category_Des={"Shoes Sneakers For Men"}
              Collection={"Shoes Collection"}
              Collection_Des={"Check out our best Shoes Collection"}
              percentage={30}
            />
            <BestSeller
              img={seller}
              Category={"Clothing"}
              Category_Des={"Men's Quilted Bomber Jacket"}
              Collection={"Summer Collection"}
              Collection_Des={"Check out our best Summer Collection"}
              percentage={30}
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
