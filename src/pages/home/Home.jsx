import React, { useState } from "react";
import Nav from "../../components/nav/Nav";
import bg from "../../assets/bg0.gif";
import "./Home.css";
import { category } from "../../category";
import Product from "../../components/Product/Product";
import { dummydata } from "../../dummydata";

function Home() {
  let [cate, setCate] = useState(dummydata);
  function filterProducts(category) {
    console.log("catname", category);

    const updatedata = dummydata.filter((item) => item.category === category);
    console.log("updatedata", updatedata);

    setCate(updatedata);
  }
  console.log("cate", cate);

  return (
    <div className="home">
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>
      <div className="category-section">
        {category.map((item) => (
          <div
            className="category-card"
            onClick={() => {
              filterProducts(item.name);
            }}
          >
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <h1>Trending Product</h1>
      <div className="product-section">
        {cate.map((item) => (
          <Product name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default Home;
