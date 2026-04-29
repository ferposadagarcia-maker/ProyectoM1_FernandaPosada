# 🎨 Generador de Paleta de colores
Aplicación web, diseñada para Colorfly Studio. Genera combinaciones de colores aleatorias en distintos formatos como HSL y HEX de una manera simple y rápida, ideal para facilitar la creación de ideas visuales para diseños (web, gráficos o interfaces).
## 📖 Instrucciones de uso de la App (manual de usuario)
1. Abre la aplicación desde tu navegador.
2. Al cargar la página, te mostrará una barra con diferentes features.
3. Elige la cantidad de colores y el formato que necesites.
4. Da click en el botón "Generar paleta" para generar la combinación aleatoria de colores.
### ✨ Interacciones en la App
+ Da click las veces que necesites hasta que encuentres la combinación de tu preferencia.
+ Puedes cambiar de cantidad de colores entre 6, 8 y 9.
+ Al poner el curso en el código puedes copiarlo al portapapeles para usarlo en alguna otra aplicación.
##  📀 Manual Técnico
**Lenguaje utilizado:** HTML, CSS y JavaScript (sin frameworks) con una arquitectura simple.
- `index.html:` estructura del contenido
- `css/styles.jcss:` estilos, diseño visual e interacciones.
- `js/script.js:` lógica para generar colores aleatorios y actualizar la interfaz.

### 💭 Desiciones Técnicas
**Generación de colores:**
- Se generó el valor aleatorio con códigos HSL
- Conversión de HSL a HEX mediante una _function_.
- Cambio automático del código (HSL o HEX) y el color de texto, según el formato.

**Elementos UX/UI:**
- Botón de _Generar Paleta_ estilo 3D
- _Selectores_ desplegables 
- Eventos `click` y `hover` en los colores.
- Animación `copy.pop` de texto (códigos de colores).
- Microfeedback discreto.
- Diseño visual minimalista y armonioso.

## 💻 Ejecución Local
- **(Opción 1):** Descarga el proyecto desde GitHub dando click en el botón _**<> CODE**_ → _**Download ZIP**_ y descomprime el archivo en la carpeta de tu preferencia; doble click en `index.html` y abrirá directamente en el navegador.

- **(Opcion 2):** 
1. Clona el repositorio:
``` bash
git clone https://github.com/ferposadagarcia-maker/ProyectoM1_FernandaPosada.git
``` 
2. Entra a la carpeta del proyecto
``` bash
cd ProyectoM1_FernandaPosada
```
3. Ejecuta la aplicación
- Busca el archivo `index.html` y ábrelo en tu navegador (Chrome, Edge, etc.)

_No es necesario instalar dependencias ni programas adicionales._

## 🚀 Despliegue de aplicación

Este proyecto se puede desplegar usando GitHubPages:
1. Crear un repositorio en GitHub y vincula el proyecto.
2. Ir a **Settings** del repositorio.
3. Buscar la sección **Pages**.
4. Seleccionar rama principal `main` y elegir la carpeta (root) → **save**.

_Tardará unos minutos en crear el link `https://`_

5. Una vez creado, dar click y te llevará al sitio web del proyecto.

🔗 **Demo:** 
https://ferposadagarcia-maker.github.io/ProyectoM1_FernandaPosada/

## ⚡ Posibles mejoras
- Bloquear colores para poder hacer una paleta propia.
- Poder hacer paletas de colores armoniosos (monochromáticos).
- Guardar la paleta en localStorage
- Descargarla en png. 
