import React from "react";
import sites from "../../data/sites.json";
import { Link } from "react-router-dom";
import "./style.scss";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="info-container vertical-center">
          <div>
            <img src="https://www.greatplacetowork.com.ar/images/perfiles/Logo-MELI_Codos.png" />
          </div>

          <div className="countries-container">
            {sites.map((country) => {
              return (
                <Link to="/products">
                  <img src={country.image} />
                  {country.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
