import React from "react";

class Products extends React.Component {
  //otra forma sin tener que usar constructor y super props y blah
  //inicializacion
  state = {
    productsData: [],
  };

  async componentDidMount() {
    const { site } = this.props.match.params;
    const data = await fetch(
      `https://api.mercadolibre.com/sites/${site}/search?q=auriculares&limit=5`
    );
    const json = await data.json();
    //actualizacion
    this.setState({
      productsData: json.results,
    });
  }
  render() {
    const { productsData } = this.state;
    return (
      <div>
        {productsData.map((product) => {
          return (
            //lectura
            <div key={product.id}>
              <img src={product.thumbnail} />
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Products;
