import { useRef, useState } from 'react';
import { categorias } from '../data/productos';
const vacio = { nombre: '', categoria: '', tallas: '', precio: '', stock: '', descripcion: '', publico: '', ocasion: '', color: '', destacado: false };
export default function Agregar({ registrar, listo, ir }) {
  const [datos, setDatos] = useState(vacio);
  const [imagen, setImagen] = useState('');
  const [leyendo, setLeyendo] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState('');
  const [ultimo, setUltimo] = useState(null);
  const archivo = useRef(null);
  const turno = useRef(0);
  const cambiar = e => setDatos(d => ({ ...d, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));
  const subir = e => {
    const actual = ++turno.current;
    setImagen(''); setError(''); setLeyendo(false);
    const file = e.target.files[0];
    if (!file) return;
    if (!['image/jpeg','image/png','image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024) {
      setError('Selecciona una imagen JPG, PNG o WebP de hasta 5 MB.'); e.target.value = ''; return;
    }
    setLeyendo(true);
    const lector = new FileReader();
    const fallar = () => { if (actual !== turno.current) return; setLeyendo(false); setError('No se pudo abrir la imagen. Selecciona otra.'); if (archivo.current) archivo.current.value = ''; };
    lector.onerror = fallar;
    lector.onload = () => {
      const prueba = new Image();
      prueba.onerror = fallar;
      prueba.onload = () => { if (actual !== turno.current) return; setImagen(lector.result); setLeyendo(false); };
      prueba.src = lector.result;
    };
    lector.readAsDataURL(file);
  };
  const guardar = async e => {
    e.preventDefault(); setError(''); setUltimo(null);
    const tallas = [...new Set(datos.tallas.split(',').map(t => t.trim()).filter(Boolean))];
    const precio = Number(datos.precio), stock = Number(datos.stock);
    if (!datos.nombre.trim() || !datos.descripcion.trim() || !tallas.length || !imagen || !Number.isFinite(precio) || precio <= 0 || !Number.isSafeInteger(stock) || stock < 0) {
      setError('Completa los campos, agrega una fotografía y revisa el precio y las existencias.'); return;
    }
    const producto = { ...datos, id: crypto.randomUUID(), nombre: datos.nombre.trim(), descripcion: datos.descripcion.trim(), color: datos.color.trim() || 'No especificado', tallas, precio, stock, img: imagen };
    setGuardando(true);
    try {
      await registrar(producto); setUltimo(producto); setDatos(vacio); setImagen(''); archivo.current.value = '';
    } catch { setError('No se pudo guardar el producto. Revisa el espacio disponible del navegador e intenta nuevamente. Tus datos siguen en el formulario.'); }
    finally { setGuardando(false); }
  };
  return <section className="seccion">
    <p className="sutil">NOVEDADES DEL NEGOCIO</p><h1>Agregar producto</h1>
    <p className="parrafo">Registra los artículos que llegaron a la tienda y muestra sus detalles en el catálogo.</p>
    <p className="aviso-registro">En esta demostración, los productos y sus fotografías se guardan únicamente en este navegador. Este apartado todavía no tiene acceso exclusivo para la encargada.</p>
    {ultimo && <div className="confirmacion" role="status">✓ Se guardó {ultimo.nombre}. <button type="button" className="enlace" onClick={() => ir({ v: 'producto', id: ultimo.id })}>Ver producto</button></div>}
    {error && <p role="alert" className="aviso-registro">{error}</p>}
    <form onSubmit={guardar} className="registro-producto">
      <fieldset disabled={!listo || guardando} className="registro-campos">
        <legend>Información del producto</legend>
        <label>Nombre *<input name="nombre" value={datos.nombre} onChange={cambiar} required maxLength={120} /></label>
        <label>Categoría *<select name="categoria" value={datos.categoria} onChange={cambiar} required><option value="">Selecciona una categoría</option>{categorias.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}</select></label>
        <label>Tallas separadas por coma *<input name="tallas" value={datos.tallas} onChange={cambiar} placeholder="4, 12, 6" required maxLength={200} /><small>También puedes escribir Única, Chica o 0-3 m.</small></label>
        <label>Precio por pieza (MXN) *<input name="precio" type="number" min="0.01" step="0.01" value={datos.precio} onChange={cambiar} required /></label>
        <label>Piezas en tienda física *<input name="stock" type="number" min="0" step="1" value={datos.stock} onChange={cambiar} required /><small>Total del producto entre todas sus tallas. Cero significa agotado.</small></label>
        <label>Para quién es *<select name="publico" value={datos.publico} onChange={cambiar} required><option value="">Selecciona una opción</option><option>Niño</option><option>Niña</option><option>Niño y niña</option></select></label>
        <label>Ceremonia *<select name="ocasion" value={datos.ocasion} onChange={cambiar} required><option value="">Selecciona una ceremonia</option><option>Primera Comunión</option><option>Presentación de 3 años</option><option>Bautizo</option></select></label>
        <label>Color<input name="color" value={datos.color} onChange={cambiar} maxLength={60} /></label>
        <label className="registro-completo">Descripción *<textarea name="descripcion" value={datos.descripcion} onChange={cambiar} required rows={4} maxLength={2000} /></label>
        <label className="registro-completo">Fotografía representativa *<input ref={archivo} type="file" accept="image/jpeg,image/png,image/webp" onChange={subir} required /><small>JPG, PNG o WebP, hasta 5 MB.</small></label>
        {leyendo && <p role="status">Preparando fotografía…</p>}
        {imagen && <img className="registro-vista" src={imagen} alt="Vista previa del producto" />}
        <label className="registro-completo registro-check"><input name="destacado" type="checkbox" checked={datos.destacado} onChange={cambiar} /> Mostrar también entre los destacados del inicio</label>
        <button className="boton" disabled={leyendo || !imagen} type="submit">{guardando ? 'Guardando…' : 'Guardar producto'}</button>
      </fieldset>
      {!listo && <p role="status">El registro estará disponible cuando se recupere el catálogo guardado.</p>}
    </form>
  </section>;
}
