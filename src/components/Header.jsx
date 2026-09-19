import { useState, useEffect, useRef } from "react";

const IconoUsuario = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

const IconoBolsa = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 8h14l-1 12H6L5 8z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

export default function Header({
  ir,
  ruta,
  piezas,
  usuario,
  abrirLogin,
  cerrarSesion,
}) {
  const [abierto, setAbierto] = useState(false);
  const [menuUsuario, setMenuUsuario] = useState(false);
  const usuarioRef = useRef(null);

  const nav = [
    ["inicio", "Inicio"],
    ["tienda", "Tienda"],
    ["nosotros", "Nosotros"],
    ["contacto", "Contacto"],
  ];

  useEffect(() => {
    const fuera = (e) => {
      if (
        usuarioRef.current &&
        !usuarioRef.current.contains(e.target)
      ) {
        setMenuUsuario(false);
      }
    };

    document.addEventListener("mousedown", fuera);

    return () => {
      document.removeEventListener("mousedown", fuera);
    };
  }, []);

  const navegar = (r) => {
    setAbierto(false);
    setMenuUsuario(false);
    ir(r);
  };

  const salir = () => {
    setMenuUsuario(false);
    cerrarSesion();
  };

  const primerNombre = usuario
    ? usuario.nombre.split(" ")[0]
    : "";

  return (
    <header className="header">
      <div className="barra">

        {/* Marca */}
        <button
          className="marca"
          onClick={() => navegar({ v: "inicio" })}
          aria-label="Ir al inicio"
        >
          Valentina Infanti
        </button>

        {/* Navegación */}
        <nav className={abierto ? "nav nav-abierta" : "nav"}>
          {nav.map(([v, texto]) => (
            <button
              key={v}
              className={
                ruta.v === v
                  ? "nav-link activo"
                  : "nav-link"
              }
              onClick={() => navegar({ v })}
            >
              {texto}
            </button>
          ))}
        </nav>

        {/* Acciones */}
        <div className="barra-acciones">

          {usuario ? (
            <div
              className="usuario"
              ref={usuarioRef}
            >
              <button
                className="usuario-btn"
                aria-expanded={menuUsuario}
                aria-haspopup="menu"
                onClick={() =>
                  setMenuUsuario(!menuUsuario)
                }
              >
                <span className="avatar">
                  {primerNombre
                    .charAt(0)
                    .toUpperCase()}
                </span>

                <span className="usuario-nombre">
                  {primerNombre}
                </span>
              </button>

              {menuUsuario && (
                <div
                  className="usuario-menu"
                  role="menu"
                >
                  <p className="usuario-datos">
                    <strong>{usuario.nombre}</strong>

                    {usuario.correo && (
                      <span>
                        {usuario.correo}
                      </span>
                    )}
                  </p>

                  <button
                    role="menuitem"
                    onClick={() =>
                      navegar({ v: "carrito" })
                    }
                  >
                    Mi carrito
                  </button>

                  <button
                    role="menuitem"
                    onClick={salir}
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="entrar"
              onClick={abrirLogin}
            >
              <IconoUsuario />

              <span className="entrar-texto">
                Iniciar sesión
              </span>
            </button>
          )}

          {/* Carrito */}
          <button
            className="carrito-btn"
            onClick={() =>
              navegar({ v: "carrito" })
            }
            aria-label="Ver carrito"
          >
            <IconoBolsa />

            <span className="carrito-texto">
              Carrito
            </span>

            <span className="contador">
              {piezas}
            </span>
          </button>

          {/* Menú móvil */}
          <button
            className="menu-btn"
            aria-expanded={abierto}
            aria-label={
              abierto
                ? "Cerrar menú"
                : "Abrir menú"
            }
            onClick={() =>
              setAbierto(!abierto)
            }
          >
            {abierto ? "×" : "☰"}
          </button>

        </div>
      </div>
    </header>
  );
}