import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Home() {
  const countries = [
    {
      name: "Argentina",
      image:
        "https://www.flaticon.com/svg/vstatic/svg/206/206654.svg?token=exp=1615218910~hmac=b552e7d4f7963667d5609edf45809c97",
    },
    {
      name: "Bolivia",
      image:
        "https://www.flaticon.com/svg/vstatic/svg/330/330535.svg?token=exp=1615218949~hmac=f32f7cb99c9cff49812c49fd273751c4",
    },
    {
      name: "Brasil",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/3022/3022546.svg?token=exp=1615219425~hmac=119ff2e4d0bcb81b36f8b20ee015d0a2",
    },
    {
      name: "Chile",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/2151/2151301.svg?token=exp=1615220684~hmac=7ea99382c27dff8a0dd484a43d820b0b",
    },
    {
      name: "Colombia",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/555/555617.svg?token=exp=1615220835~hmac=3d0fe805642cb77731ffab25571a00fc",
    },
    {
      name: "Costa Rica",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/206/206696.svg?token=exp=1615220856~hmac=044ce43f31b2fda366dd811593da58ee",
    },
    {
      name: "Dominicana",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/206/206805.svg?token=exp=1615221721~hmac=a79402a43fb5d4fb7ade4fd233c350cd",
    },
    {
      name: "Ecuador",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/330/330581.svg?token=exp=1615221739~hmac=e79f653c4cd22b919ecf735ba7b6df0f",
    },
    {
      name: "Guatemala",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/206/206754.svg?token=exp=1615221755~hmac=c0a7eccd501bc3c8add8ba91f0e84303",
    },
    {
      name: "Honduras",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/206/206828.svg?token=exp=1615221771~hmac=9f277e09a17d443119452076987d4ca5",
    },
    {
      name: "México",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/206/206600.svg?token=exp=1615221790~hmac=57ee0adcd4ae785043a7a1aed6018ca4",
    },
    {
      name: "Nicaragua",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/555/555665.svg?token=exp=1615221806~hmac=922ecfd53d823c2543bb9a9400a531b6",
    },
    {
      name: "Panamá",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/206/206746.svg?token=exp=1615221823~hmac=678363a78ed4cd4d6235fcccbc342ac2",
    },
    {
      name: "Paraguay",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/206/206811.svg?token=exp=1615221834~hmac=919158093b15097ca35deddcac4ac7f8",
    },
    {
      name: "Perú",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/206/206664.svg?token=exp=1615221853~hmac=c1aafce705592e39b66751a573e1b64c",
    },
    {
      name: "Salvador",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/206/206837.svg?token=exp=1615221870~hmac=7c458685c5d4f996872b224fdcdd8960",
    },
    {
      name: "Uruguay",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/206/206764.svg?token=exp=1615221883~hmac=c8e2442986e469d306cee18d70271d16",
    },
    {
      name: "Venezuela",
      image:
        "https://www.flaticon.es/svg/vstatic/svg/555/555622.svg?token=exp=1615221898~hmac=3050470eb3817827c5ae933246f9af26",
    },
  ];
  return (
    <>
      <div className="home-container">
        <div className="info-container vertical-center">
          <div>
            <img src="https://www.greatplacetowork.com.ar/images/perfiles/Logo-MELI_Codos.png" />
          </div>

          <div className="countries-container">
            {countries.map((country) => {
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
