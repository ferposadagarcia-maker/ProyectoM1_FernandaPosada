const btn = document.getElementById("btn");
const palette = document.getElementById("palette");
const colorCount = document.getElementById("colorCount");
const formato = document.getElementById("formato");

btn.addEventListener("click", generarPaleta);

function generarColorHSL() {
  const h = Math.floor(Math.random() * 360) ;
  const s = Math.floor(Math.random() * 40) + 50;
  const l = Math.floor(Math.random() * 30) + 50;

  return `hsl(${h}, ${s}%, ${l}%)`;
}

function hslAHex(color) {
  const div = document.createElement("div");
  div.style.color = color;

  document.body.appendChild(div);

  const rgb = getComputedStyle(div).color;

  document.body.removeChild(div);

  const valores = rgb.match(/\d+/g).map(Number);

  const r = Number(valores[0]);
  const g = Number(valores[1]);
  const b = Number(valores[2]);

  const rHex = r.toString(16).padStart(2, "0");
  const gHex = g.toString(16).padStart(2, "0");
  const bHex = b.toString(16).padStart(2, "0");

  const hex = "#" + rHex + gHex + bHex;

  return hex
}

function suavizarColor(color) {
  const valores = color.match(/\d+/g);

  let h = valores[0];
  let s = Math.max(20, valores[1] * 0.8);
  let l = Math.min(90, valores[2] * 1.7);

  return `hsla(${h}, ${s}%, ${l}%, 0.35)`;
}

function copiarAlPortapapeles(texto) {
  navigator.clipboard.writeText(texto);
  mostrarMensaje("Copiado al portapapeles");
}

function mostrarMensaje(texto) {
  const msg = document.createElement("div");
  msg.textContent = texto;

  msg.style.position = "fixed";
  msg.style.bottom = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.background = "#111";
  msg.style.color = "#fff";
  msg.style.padding = "10px 20px";
  msg.style.borderRadius = "20px";
  msg.style.fontSize = "14px";
  msg.style.zIndex = "9999";

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 1500);
}

function generarPaleta() {
  palette.innerHTML = "";
  
  const colores = [];
  const cantidad = parseInt(colorCount.value);

  if (!cantidad || cantidad === 0) {
    mostrarMensaje("Selecciona la cantidad de colores");
    return;
  }

  for (let i = 0; i < cantidad; i++) {
    const color = generarColorHSL();
    const hex = hslAHex(color);
    const tipoFormato = formato.value;
    let textMostrar;

    if (tipoFormato === "hex") {
      textMostrar = hex;
    } else {
      textMostrar = color;
    }
    colores.push(color);

    const l = parseInt(color.split(",")[2]);
    const textColor = l > 50 ? "black" : "white";

    const div = document.createElement("div");
        div.classList.add("color-box");
        div.style.backgroundColor = color;
        div.style.color = textColor;

    const texto = document.createElement("span");
    texto.textContent = textMostrar;
    div.appendChild(texto);

        div.addEventListener("click", function() {
          const textoCopiar = (tipoFormato === "hex") ? hex : color;
          copiarAlPortapapeles(textoCopiar);
          texto.classList.add("copy-pop");

          setTimeout(() => {
            texto.classList.remove("copy-pop")
          }, 250);
        });
    palette.appendChild(div);
       actualizarFondo(colores);
  }


function actualizarFondo(colores) {
  const seleccion = colores.slice(0, 4);

  while (seleccion.length < 4) {
    seleccion.push(seleccion[0]);
  }

  const c1 = suavizarColor(seleccion[0]);
  const c2 = suavizarColor(seleccion[1]);
  const c3 = suavizarColor(seleccion[2]);
  const c4 = suavizarColor(seleccion[3]);

  document.body.style.background = `
    radial-gradient(circle at 20% 30%, ${c1}, transparent 50%),
    radial-gradient(circle at 80% 20%, ${c2}, transparent 50%),
    radial-gradient(circle at 20% 80%, ${c3}, transparent 50%),
    radial-gradient(circle at 80% 80%, ${c4}, transparent 50%),
    #f5f7fa
  `;
  }
    
}