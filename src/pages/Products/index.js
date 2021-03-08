import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemProduct from "../../components/ItemProduct";
import Navbar from "../../components/Navbar";
import "./style.scss";

function Products() {
  //llamada a la api
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const baseUrl = "https://api.mercadolibre.com/sites/MLA/search?q=kayak";
    const getItems = await axios(baseUrl);
    setItems(getItems.data.results);
  }
  //filtrando contenido para el buscador navbar
  const [searchParam, setSearchParam] = useState("");
  function handleSearch(searchParam) {
    setSearchParam(searchParam);
  }

  return (
    <>
      <div className="container-products ">
        <Navbar handleCallback={handleSearch} />

        <div className="wrapper">
          <p>Basada en tu última visita</p>
          <div className="container-items">
            {items
              //filtrar contenido para el buscador
              .filter((item) => {
                return item.title.toLowerCase().includes(searchParam);
              })
              //plasmando la llamada de la api aca
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
      </div>
    </>
  );
}

export default Products;
