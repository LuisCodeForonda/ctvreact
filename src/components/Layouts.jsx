import React from 'react';

function Layout({ children }) {
  return (
    <div>
      {/* Aquí puedes incluir elementos de la plantilla, como encabezado, navegación, etc. */}
      <header>
        <h1>Mi Aplicación</h1>
      </header>
      
      {/* Renderiza el contenido de la página dentro del componente */}
      <main>
        {children}
      </main>
      
      {/* Puedes incluir el pie de página u otros elementos comunes aquí */}
      <footer>
        <p>Derechos de autor © 2023</p>
      </footer>
    </div>
  );
}

export default Layout;

