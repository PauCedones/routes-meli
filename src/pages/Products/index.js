import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemProduct from "../../components/ItemProduct";
import Navbar from "../../components/Navbar";
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

  const [searchParam, setSearchParam] = useState("");
  function handleSearch(searchParam) {
    setSearchParam(searchParam);
  }

  return (
    <>
      <div className="container-products">
        <Navbar handleCallback={handleSearch} />
        <p>Basada en tu última visita</p>
        <div className="container-items">
          {items
            .filter((item) => {
              return item.title.toLowerCase().includes(searchParam);
            })

            .map((item, key) => {
              return (
                <ItemProduct
                  img={item.thumbnail}
                  price={item.price}
                  key={item.id ? item.id : key}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Products;
