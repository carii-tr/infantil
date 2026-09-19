import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Inicio from "./pages/Inicio";
import Tienda from "./pages/Tienda";
import Producto from "./pages/Producto";
import CarritoPage from "./pages/Carrito";
import { Nosotros, Contacto } from "./pages/Info";
import "./App.css";

const CLAVE_USUARIO = "vi-usuario";

export default function App() {
  const [ruta, setRuta] = useState({ v: "inicio" });
  const [items, setItems] = useState([]);
  const [loginAbierto, setLoginAbierto] = useState(false);

  // Usuario simulado: se guarda en localStorage para que siga al recargar
  const [usuario, setUsuario] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(CLAVE_USUARIO));
    } catch {
      return null;
    }
  });

  const ir = (r) => setRuta(r);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ruta]);

  const iniciarSesion = (datos) => {
    setUsuario(datos);
    setLoginAbierto(false);
    try {
      localStorage.setItem(CLAVE_USUARIO, JSON.stringify(datos));
    } catch {
      /* si el navegador no deja guardar, la sesión dura mientras la página esté abierta */
    }
  };

  const cerrarSesion = () => {
    setUsuario(null);
    try {
      localStorage.removeItem(CLAVE_USUARIO);
    } catch {
      /* nada que limpiar */
    }
  };

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
      <Header
        ir={ir}
        ruta={ruta}
        piezas={piezas}
        usuario={usuario}
        abrirLogin={() => setLoginAbierto(true)}
        cerrarSesion={cerrarSesion}
      />

      <main>
        {ruta.v === "inicio" && <Inicio ir={ir} />}
        {ruta.v === "tienda" && <Tienda ir={ir} catInicial={ruta.cat} />}
        {ruta.v === "producto" && <Producto id={ruta.id} ir={ir} agregar={agregar} />}
        {ruta.v === "carrito" && (
          <CarritoPage
            items={items}
            cambiarCantidad={cambiarCantidad}
            quitar={quitar}
            ir={ir}
            usuario={usuario}
            abrirLogin={() => setLoginAbierto(true)}
          />
        )}
        {ruta.v === "nosotros" && <Nosotros ir={ir} />}
        {ruta.v === "contacto" && <Contacto />}
      </main>

      <Footer ir={ir} />

      {loginAbierto && (
        <Login alEntrar={iniciarSesion} alCerrar={() => setLoginAbierto(false)} />
      )}
    </div>
  );
}
