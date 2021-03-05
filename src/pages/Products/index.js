import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemProduct from "../../components/ItemProduct";
import "./style.scss";

function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const baseUrl = "https://api.mercadolibre.com/sites/MLA/search?q=kayak";
    const getItems = await axios(baseUrl);

    console.log(getItems.data.results);
    setItems(getItems.data.results);
  }

  return (
    <>
      <p>Basada en tu última visita</p>
      <div className="container-products">
        {items.map((item, key) => {
          return (
            <ItemProduct
              img={item.thumbnail}
              price={item.price}
              key={item.id ? item.id : key}
            />
          );
        })}
      </div>
    </>
  );
}

export default Products;
