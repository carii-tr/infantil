// IndexedDB conserva las fotografías y los productos en este navegador.
function abrir() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('valentina-infanti-catalogo', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('productos', { keyPath: 'id' });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    request.onblocked = () => reject(new Error('Cierra otras pestañas de la tienda e intenta de nuevo.'));
  });
}
export async function cargarProductos() {
  const db = await abrir();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('productos', 'readonly');
    const req = tx.objectStore('productos').getAll();
    tx.oncomplete = () => { db.close(); resolve(req.result); };
    tx.onabort = tx.onerror = () => { db.close(); reject(tx.error); };
  });
}
export async function guardarProducto(producto) {
  const db = await abrir();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('productos', 'readwrite');
    tx.objectStore('productos').add(producto);
    tx.oncomplete = () => { db.close(); resolve(); };
    tx.onabort = tx.onerror = () => { db.close(); reject(tx.error); };
  });
}
