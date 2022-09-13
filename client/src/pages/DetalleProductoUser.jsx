import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useEffect, useState } from 'react';

const product = { id:1, product_name: "Tassa de ceràmica Al pas i amb calma", product_description: "Tassa de ceràmica Al pas i amb calma de mesures 8 (ample) x 9,5 cm (alt), de capacitat: 325 ml. Apta per a rentavaixella i per a microones.", product_price: "12"};

function DetalleProductoUser() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout (() => {
        resolve(product);
      }, 3000)
    });
    getData.then(res => setData(res))
  }, [])

  return (
    <div className="DetalleProductoUser">
      <Navbar />
      <section className="sectionDetalleUser">
        <div className="header-title" > 
            <h1>Detall Producte</h1>
        </div>

        <div>
            <div>
                <img className="detail_image" src={data.image} alt="" />
            </div>
            <p>Nom del producte:</p>
            <p>{data.product_name}</p>
            <p>Descripció</p>
            <p>{data.product_description}</p>
            <p>Preu</p>
            <p>{data.product_price} €</p>
            <button>Afegir al cistell</button>
        </div>

      </section>
      <Footer />
    </div>
  );
}

export default DetalleProductoUser;