// Leer el archivo JSON
async function fetchProvincias() {
    try {
      const response = await fetch('provincias.json');
      const data = await response.json();
      
      // Crear la tabla y sus elementos
      const table = document.createElement('table');
      table.classList.add('table', 'table-striped'); // Añadir clases de Bootstrap
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');
      table.appendChild(thead);
      table.appendChild(tbody);
  
      // Añadir encabezados a la tabla
      const headerRow = document.createElement('tr');
      ['Provincia', 'Localidad', 'Código Postal'].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
  
      // Añadir filas de datos a la tabla
      data.provincias.forEach(provincia => {
        provincia.localidades.forEach(localidad => {
          const row = document.createElement('tr');
          const provinciaCell = document.createElement('td');
          provinciaCell.textContent = provincia.nombre;
          const localidadCell = document.createElement('td');
          localidadCell.textContent = localidad.nombre;
          const codigoPostalCell = document.createElement('td');
          codigoPostalCell.textContent = localidad.codigo_postal;
          row.appendChild(provinciaCell);
          row.appendChild(localidadCell);
          row.appendChild(codigoPostalCell);
          tbody.appendChild(row);
        });
      });
  
      // Añadir la tabla al div en el HTML
      document.getElementById('tabla-container').appendChild(table);
    } catch (error) {
      console.error('Error al obtener y procesar los datos:', error);
    }
  }
  
  // Llamar a la función para obtener y mostrar los datos
  fetchProvincias();
  