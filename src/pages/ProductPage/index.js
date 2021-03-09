import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const getData = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const getJson = await getData.json();
    setItem(getJson);
    console.log(getJson);
  }

  return (
    <>
      <p>{item.title}</p>
      <img src={item.thumbnail} />
      <p>{item.price}</p>
    </>
  );
}
export default ProductPage;
