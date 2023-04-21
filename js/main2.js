async function fetchProvincias() {
    try {
      const response = await fetch('provincias.json');
      const data = await response.json();
    
      const table = document.createElement('table');
      table.classList.add('table', 'table-striped'); 
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');
      table.appendChild(thead);
      table.appendChild(tbody);
  
      const headerRow = document.createElement('tr');
      ['Pais', 'Localidad', 'Código Postal'].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
  
     
      data.pais.forEach(pais => {
        pais.localidades.forEach(localidad => {
          const row = document.createElement('tr');
          const provinciaCell = document.createElement('td');
          provinciaCell.textContent = pais.nombre;
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
  
      
      document.getElementById('tabla-container').appendChild(table);
    } catch (error) {
      console.error('Error al obtener y procesar los datos:', error);
    }
  }

  fetchProvincias();
  