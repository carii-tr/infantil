import { useState, useEffect } from "react";

export default function Login({ alEntrar, alCerrar }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  // Escape cierra el modal
  useEffect(() => {
    const tecla = (e) => {
      if (e.key === "Escape") alCerrar();
    };
    window.addEventListener("keydown", tecla);
    return () => window.removeEventListener("keydown", tecla);
  }, [alCerrar]);

  const enviar = (e) => {
    e.preventDefault();
    alEntrar({ nombre: nombre.trim() || "Invitada", correo: correo.trim() });
  };

  return (
    <div className="modal-fondo" onClick={alCerrar}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-titulo"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-cerrar" onClick={alCerrar} aria-label="Cerrar">×</button>

        <h2 id="login-titulo">Bienvenida</h2>
        <p className="sutil">Inicia sesión para apartar tus pedidos.</p>

        <form className="formulario" onSubmit={enviar}>
          <label>
            Nombre
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              autoFocus
            />
          </label>

          <label>
            Correo
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="tucorreo@ejemplo.com"
            />
          </label>

          <label>
            Contraseña
            <input type="password" placeholder="••••••••" />
          </label>

          <button className="boton boton-ancho" type="submit">Entrar</button>
        </form>

        <p className="nota">Inicio de sesión de demostración: puedes escribir cualquier dato.</p>
      </div>
    </div>
  );
}
