import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Tienda from "./pages/Tienda";
import Producto from "./pages/Producto";
import CarritoPage from "./pages/Carrito";
import { Nosotros, Contacto } from "./pages/Info";
import "./App.css";

export default function App() {
  const [ruta, setRuta] = useState({ v: "inicio" });
  const [items, setItems] = useState([]);

  const ir = (r) => setRuta(r);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ruta]);

  const agregar = (p, talla) => {
    const key = `${p.id}-${talla}`;
    setItems((prev) =>
      prev.some((i) => i.key === key)
        ? prev.map((i) => (i.key === key ? { ...i, cantidad: i.cantidad + 1 } : i))
        : [...prev, { key, id: p.id, nombre: p.nombre, precio: p.precio, img: p.img, color: p.color, talla, cantidad: 1 }]
    );
  };

  const cambiarCantidad = (key, delta) =>
    setItems((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, cantidad: i.cantidad + delta } : i))
        .filter((i) => i.cantidad > 0)
    );

  const quitar = (key) => setItems((prev) => prev.filter((i) => i.key !== key));
  const piezas = items.reduce((s, i) => s + i.cantidad, 0);

  return (
    <div className="app">
      <Header ir={ir} ruta={ruta} piezas={piezas} />

      <main>
        {ruta.v === "inicio" && <Inicio ir={ir} />}
        {ruta.v === "tienda" && <Tienda ir={ir} catInicial={ruta.cat} />}
        {ruta.v === "producto" && <Producto id={ruta.id} ir={ir} agregar={agregar} />}
        {ruta.v === "carrito" && (
          <CarritoPage items={items} cambiarCantidad={cambiarCantidad} quitar={quitar} ir={ir} />
        )}
        {ruta.v === "nosotros" && <Nosotros ir={ir} />}
        {ruta.v === "contacto" && <Contacto />}
      </main>

      <Footer ir={ir} />
    </div>
  );
}
