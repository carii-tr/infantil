import { useState } from "react";

export default function Header({ ir, ruta, piezas }) {
  const [abierto, setAbierto] = useState(false);

  const nav = [
    ["inicio", "Inicio"],
    ["tienda", "Tienda"],
    ["nosotros", "Nosotros"],
    ["contacto", "Contacto"],
  ];

  const navegar = (r) => {
    setAbierto(false);
    ir(r);
  };

  return (
    <header className="header">
      <p className="aviso">Vestidos y artículos para ceremonias infantiles · Aguascalientes</p>

      <div className="barra">
        <button className="marca" onClick={() => navegar({ v: "inicio" })}>
          Valentina Infanti
        </button>

        <nav className={abierto ? "nav nav-abierta" : "nav"}>
          {nav.map(([v, texto]) => (
            <button
              key={v}
              className={ruta.v === v ? "nav-link activo" : "nav-link"}
              onClick={() => navegar({ v })}
            >
              {texto}
            </button>
          ))}
        </nav>

        <div className="barra-acciones">
          <button className="carrito-btn" onClick={() => navegar({ v: "carrito" })}>
            Carrito
            <span className="contador">{piezas}</span>
          </button>
          <button
            className="menu-btn"
            aria-expanded={abierto}
            aria-label="Abrir menú"
            onClick={() => setAbierto(!abierto)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
