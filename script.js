document.addEventListener('DOMContentLoaded', () => {
    const nasa_key = 'TLeajeEjkipMW0d0TjHZUMLYhHeAhlPBRAEHKqTV';
    const fechaForm = document.querySelector('#fechaForm');
    const fechaInput = document.querySelector('#inputFecha');
    const multimedia = document.querySelector('#c_multimedia');
    const titulo = document.querySelector('#titulo');
    const fecha = document.querySelector('#fecha');
  
    //  Establecer fecha máxima como el día actual
    const hoy = new Date().toISOString().split('T')[0];
    fechaInput.setAttribute('max', hoy);
  
    // Crear dinámicamente el botón
    const btnSubmit = document.createElement('button');
    btnSubmit.textContent = 'Mostrar Imagen';
    btnSubmit.className = 'btn btn-primary mt-3';
    btnSubmit.type = 'button'; 
    fechaForm.appendChild(btnSubmit);
  
    // Configurar el evento del botón
    btnSubmit.addEventListener('click', () => {
      const selectedDate = fechaInput.value;
  
      if (selectedDate) {
        const ruta = `https://api.nasa.gov/planetary/apod?date=${selectedDate}&api_key=${nasa_key}`;
  
        fetch(ruta)
          .then((respuesta) => respuesta.json())
          .then((resultado) => {
            mostrarDatos(resultado);
          })
          .catch((error) => {
            console.error('Error al obtener datos:', error);
            multimedia.innerHTML = '<p class="text-danger">No se pudo obtener la imagen. Inténtalo nuevamente.</p>';
          });
      } else {
        multimedia.innerHTML = '<p class="text-warning">Por favor, selecciona una fecha.</p>';
      }
    });
  
    function mostrarDatos({ date,  media_type, title, url }) {
      titulo.innerHTML = `Título: ${title}`  || 'Sin título';
      fecha.innerHTML = `Fecha: ${date}`;
      multimedia.innerHTML = ''; 
  
      if (media_type === 'video') {
        multimedia.innerHTML = `
          <iframe src="${url}" title="video" allowfullscreen class="mb-3"></iframe>`;
      } else {
        const imgElement = document.createElement('img');
        imgElement.src = url;
        imgElement.alt = title;
        imgElement.className = 'img-fluid mb-3';
        multimedia.appendChild(imgElement);
  
      }
    }
  });



  