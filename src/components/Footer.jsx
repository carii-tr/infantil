import { categorias } from "../data/productos";

export default function Footer({ ir }) {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Marca */}
        <div>
          <h2 className="footer-marca">
            Valentina Infanti
          </h2>

          <p>
            Vestidos, accesorios y artículos
            para acompañar los momentos
            más especiales de tus pequeños.
          </p>
        </div>

        {/* Tienda */}
        <div>
          <h4>Tienda</h4>

          {categorias.map((c) => (
            <button
              key={c.id}
              className="enlace"
              onClick={() =>
                ir({
                  v: "tienda",
                  cat: c.id,
                })
              }
            >
              {c.nombre}
            </button>
          ))}
        </div>

        {/* Información */}
        <div>
          <h4>Información</h4>

          <button
            className="enlace"
            onClick={() => ir({ v: "nosotros" })}
          >
            Nosotros
          </button>

          <button
            className="enlace"
            onClick={() => ir({ v: "contacto" })}
          >
            Contacto
          </button>

          <button
            className="enlace"
            onClick={() => ir({ v: "contacto" })}
          >
            Ubicación
          </button>
        </div>

        {/* Visítanos */}
        <div>
          <h4>Visítanos</h4>

          <p>
            C.C. Villasunción, Local 3 K1
            <br />
            Aguascalientes, México
          </p>

          <p>
            <a href="tel:+524499788078">
              449 978 8078
            </a>
          </p>

          <p>
            <a
              href="https://www.instagram.com/valentinainfanti/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            {" · "}

            <a
              href="https://www.facebook.com/CeremoniaInfantil.ValentinaInfanti"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>

      <p className="footer-legal">
        © 2026 Valentina Infanti · Sitio de demostración,
        los precios son representativos.
      </p>
    </footer>
  );
}