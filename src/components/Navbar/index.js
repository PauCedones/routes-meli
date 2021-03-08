import React from "react";
import "./style.scss";

function Navbar(props) {
  //pasando la info a buscar para que se filtren los productos
  function handleChange(e) {
    props.handleCallback(e.target.value);
  }
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="navbar-container">
        <div className="input-logo-container  wrapper">
          <img src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png" />
          <div className="search-wrapper">
            <input type="text" onChange={handleChange} />
            <i className="fa fa-search"></i>
          </div>
          <p>Comprá hoy y pagá después</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
