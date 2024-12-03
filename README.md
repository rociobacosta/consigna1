# Este código fue realizado para cumplir con la consigna N°1 de la prueba tecnica para ingreso a pasante de soporte técnico

## Descripción
Cree una pequeña Landing page en donde puedes consultar que imagen o video del espacio fue tomada por la NASA el dia que desees (validando que la fecha máxima sea la del día actual), para utilice la API publica, justamente de la nasa para poder obtener los datos como el elemento visual, como nombre de este, utilice el Framework Bootstrap para darle estilos, además de HTML, CSS y JS.
La pagina cuenta con un navbar donde solo esta ubicado el logo de la NASA, un formulario para que el usuario ingrese la fecha, un contenedor multimedia que muestra la imagen o video obtenido por APi y finalmente un footer, con derechos de autor y logo de la empresa.

### Intervencion del DOM mediante JS
Agrego un botón dinámicamente desde el formulario HTML mediante JS, este boton al hacer click dispara un evento que solicita la información a la API y muestra lo obtenido.
### Disparar un evento del DOM para cambiar una propiedad visual
Al hacer clic en el botón, se dispara un evento que consulta la API de la NASA y muestra los resultados (imagen o video). Además, si la respuesta es exitosa, se cambia dinámicamente el contenido de un contenedor HTML con la imagen o video correspondiente.
### 3. Agregar texto e imagen a través de JavaScript:
En la función mostrarDatos, después de obtener los datos de la API, se insertan dinámicamente un título, una fecha y una imagen o un video en el contenedor de multimedia. Esto cambia la propiedad visual de un elemento HTML ya existente.
