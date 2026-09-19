import { categorias, productos } from "../data/productos";
import TarjetaProducto from "../components/TarjetaProducto";
import hero from "../../public/img/vestidocomunion2.png";

export default function Inicio({ ir }) {
  const destacados = productos.filter((p) => p.destacado);

  return (
    <>
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="hero">
        <div className="hero-in">

          <div className="hero-texto">

            <p className="hero-etiqueta">
              CEREMONIAS INFANTILES
            </p>

            <h1>
              Momentos especiales,
              <br />
              vestidos para recordar.
            </h1>

            <p>
              Descubre vestidos, trajes y accesorios para acompañar
              a tus pequeños en bautizos, Primera Comunión y
              presentaciones.
            </p>

            <div className="hero-botones">
              <button
                className="boton"
                onClick={() => ir({ v: "tienda" })}
              >
                Ver colección
              </button>

              <button
                className="boton boton-borde"
                onClick={() => ir({ v: "contacto" })}
              >
                Visítanos
              </button>
            </div>

          </div>

          <div className="hero-foto">
            <img
              src={hero}
              alt="Vestido de ceremonia infantil"
            />

            <p className="hero-sello">
              Atención personalizada
            </p>
          </div>

        </div>
      </section>


      {/* =====================================================
          BENEFICIOS
          ===================================================== */}

      <section className="beneficios">

        <div className="beneficio">
          <span
            className="beneficio-punto punto-rosa"
            aria-hidden="true"
          />

          <div>
            <h3>Encuentra tu conjunto</h3>
            <p>
              Vestidos, trajes y accesorios para complementar
              cada ceremonia.
            </p>
          </div>
        </div>


        <div className="beneficio">
          <span
            className="beneficio-punto punto-lila"
            aria-hidden="true"
          />

          <div>
            <h3>Prueba las prendas</h3>
            <p>
              Visítanos para conocer las telas y elegir la talla
              adecuada.
            </p>
          </div>
        </div>


        <div className="beneficio">
          <span
            className="beneficio-punto punto-salvia"
            aria-hidden="true"
          />

          <div>
            <h3>Atención personalizada</h3>
            <p>
              Te ayudamos a encontrar los detalles para ese
              momento especial.
            </p>
          </div>
        </div>

      </section>


      {/* =====================================================
          CATEGORÍAS
          ===================================================== */}

      <section className="seccion">

        <div className="seccion-cabeza">
          <div>
            <p className="sutil">
              DESCUBRE NUESTRA COLECCIÓN
            </p>

            <h2>
              Encuentra lo que necesitas
            </h2>
          </div>

          <button
            className="enlace"
            onClick={() => ir({ v: "tienda" })}
          >
            Ver toda la tienda
          </button>
        </div>


        <div className="categorias">

          {categorias.map((c) => (
            <button
              key={c.id}
              className="cat-card"
              onClick={() =>
                ir({
                  v: "tienda",
                  cat: c.id,
                })
              }
            >
              <h3>{c.nombre}</h3>

              <p>{c.desc}</p>

              <span className="cat-link">
                Ver colección →
              </span>
            </button>
          ))}

        </div>

      </section>


      {/* =====================================================
          PRODUCTOS DESTACADOS
          ===================================================== */}

      <section className="seccion">

        <div className="seccion-cabeza">

          <div>
            <p className="sutil">
              SELECCIÓN ESPECIAL
            </p>

            <h2>
              Productos destacados
            </h2>
          </div>

          <button
            className="enlace"
            onClick={() => ir({ v: "tienda" })}
          >
            Ver toda la tienda
          </button>

        </div>


        <div className="rejilla">

          {destacados.map((p) => (
            <TarjetaProducto
              key={p.id}
              producto={p}
              ir={ir}
            />
          ))}

        </div>

      </section>


      {/* =====================================================
          COMPRA POR OCASIÓN
          ===================================================== */}

      <section className="franja">

        <p className="sutil">
          PARA CADA MOMENTO ESPECIAL
        </p>

        <h2>
          Todo para un día especial
        </h2>

        <p>
          Encuentra el vestido, los accesorios y los artículos
          de ceremonia para acompañar cada ocasión.
        </p>

        <div className="franja-links">

          <button
            className="chip"
            onClick={() =>
              ir({
                v: "tienda",
                cat: "vestidos",
              })
            }
          >
            Primera Comunión
          </button>

          <button
            className="chip"
            onClick={() =>
              ir({
                v: "tienda",
                cat: "vestidos",
              })
            }
          >
            Presentación
          </button>

          <button
            className="chip"
            onClick={() =>
              ir({
                v: "tienda",
                cat: "ceremonia",
              })
            }
          >
            Bautizo
          </button>

          <button
            className="chip"
            onClick={() =>
              ir({
                v: "tienda",
                cat: "accesorios",
              })
            }
          >
            Accesorios
          </button>

        </div>

      </section>
    </>
  );
}