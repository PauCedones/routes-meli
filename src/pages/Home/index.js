import React from "react";
import sites from "../../data/sites.json";
import { Link } from "react-router-dom";
import "./style.scss";

class Home extends React.Component {
  render() {
    return (
      <ul>
        {sites.map((site, key) => {
          return (
            <li>
              <Link to={`/products/${site.site}`}>
                <img src={site.image} width="15" />
                {site.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Home;
