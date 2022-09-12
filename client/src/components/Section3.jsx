import React from "react";
import foto from "../assets/mountain.jpg";

export default function Section3() {
  return (
    <div className="section3-grid">
      <section className="apadrina">
        <h2>Apadrina una hectàrea</h2>
      </section>
      <section className="img-grid">
        <img src={foto} alt="caballo" className="img-caballo" />
      </section>

      <section className="donacio">
        <h2>Donació</h2>
      </section>
    </div>
  );
}
