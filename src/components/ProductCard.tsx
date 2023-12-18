import React from "react";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="wrapper">
        <div className="colorProd"></div>
        <div
          className="imgProd"
          style={{
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/batman.png?alt=media&token=bcce964a-7224-4e47-b619-265e93b5311e)",
          }}
        ></div>
        <div className="infoProd">
          <p className="nombreProd">
            ARTFX DC UNIVERSE Batman HUSH Renewal Package
          </p>
          <p className="extraInfo">Fecha de salida: 31/03/2021</p>
          <div className="actions">
            <div className="preciosGrupo">
              <p className="precio precioProd">9,999</p>
            </div>
            <div className="icono action alCarrito">
              <svg
                className="inCart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
              >
                <title>Quitar del carrito</title>
                <path d="M30 22H12M2 6h6l10 40h32l3.2-9.7"></path>
                <circle cx="20" cy="54" r="4"></circle>
                <circle cx="46" cy="54" r="4"></circle>
                <circle cx="46" cy="22" r="16"></circle>
                <path d="M53 18l-8 9-5-5"></path>
              </svg>
              <svg
                className="outCart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
              >
                <title>Agregar al carrito</title>
                <path d="M2 6h10l10 40h32l8-24H16"></path>
                <circle cx="23" cy="54" r="4"></circle>
                <circle cx="49" cy="54" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
