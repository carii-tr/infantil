export function Nosotros({ ir }) {
  return (
    <section className="seccion estrecha">

      <p className="sutil">
        CONOCE NUESTRA HISTORIA
      </p>

      <h1>Nosotros</h1>

      <p className="parrafo">
        Valentina Infanti es una tienda de Aguascalientes
        dedicada a vestir a los niños en sus celebraciones
        más importantes: Primera Comunión, presentación de
        tres años y bautizo.
      </p>

      <p className="parrafo">
        Seleccionamos cada prenda pensando en que se vea
        bonita en las fotos y siga siendo cómoda después
        de varias horas de ceremonia. En la tienda puedes
        ver las telas, probar tallas y armar el conjunto
        completo con tocado, guantes, calzado y los
        artículos de la ceremonia.
      </p>

      <p className="parrafo">
        Te atendemos de manera personal: si buscas algo
        específico o necesitas un ajuste, escríbenos o
        visítanos en el Centro Comercial Villasunción.
      </p>

      <button
        className="boton"
        onClick={() => ir({ v: "contacto" })}
      >
        Cómo llegar
      </button>

    </section>
  );
}


export function Contacto() {
  return (
    <section className="seccion">

      {/* Encabezado */}
      <div className="pagina-cabeza">
        <div>
          <p className="sutil">
            ENCUÉNTRANOS
          </p>

          <h1>Visítanos</h1>

          <p className="parrafo">
            Ven a conocer nuestra colección y recibe
            atención personalizada para encontrar
            todo lo que necesitas.
          </p>
        </div>
      </div>

      {/* Información y mapa */}
      <div className="contacto-datos">

        <p>
          <strong>Valentina Infanti</strong>
        </p>

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
          Lunes a domingo, horario del centro comercial.
        </p>

      </div>

      <div className="mapa">
        <iframe
          title="Ubicación de Valentina Infanti"
          src="https://maps.google.com/maps?q=Centro%20Comercial%20Villasunci%C3%B3n%20Aguascalientes&output=embed"
          loading="lazy"
        />
      </div>

      {/* Redes sociales */}
      <div>
        <p className="sutil">
          SÍGUENOS
        </p>

        <h2>
          Descubre nuestras novedades
        </h2>

        <p className="parrafo">
          Conoce nuestras colecciones y descubre
          lo que va llegando a la tienda.
        </p>

        <p>
          <a
            href="https://www.instagram.com/valentinainfanti/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram · @valentinainfanti
          </a>

          <br />

          <a
            href="https://www.facebook.com/CeremoniaInfantil.ValentinaInfanti"
            target="_blank"
            rel="noreferrer"
          >
            Facebook · Valentina Infanti
          </a>
        </p>
      </div>

    </section>
  );
}