import React, { useState } from "react";
import "./Shop.css";
import { category } from "../../category";
import { FaShopify } from "react-icons/fa";
import Product from "../../components/Product/Product";
import { dummydata } from "../../dummydata";

function Shop() {
  const [cate, setCate] = useState(dummydata);

  function filterProducts(category) {
    if (category === "All") {
      setCate(dummydata);
    } else {
      const updatedata = dummydata.filter(
        (item) => item.category === category
      );
      setCate(updatedata);
    }
  }

  return (
    <div className="shop">
      <div className="heading">
        <span>Shop</span>
        <FaShopify />
      </div>

      <div className="category-section">
        {category.map((item) => (
          <div
            className="category-card"
            key={item.name}
            onClick={() => filterProducts(item.name)}
          >
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="product-section">
        {cate.map((item) => (
          <Product
            key={item.id || item.name}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;


