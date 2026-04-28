const btn = document.getElementById("btn");
const palette = document.getElementById("palette");
const colorCount = document.getElementById("colorCount");

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
function generarPaleta() {
  palette.innerHTML = "";

  const cantidad = colorCount.value;

  for (let i = 0; i < cantidad; i++) {
    const color = generarColorHSL();
    const hex = hslAHex(color);

    const l = parseInt(color.split(",")[2]);
    const textColor = l > 50 ? "black" : "white";


    const div = document.createElement("div");
        div.classList.add("color-box");
        div.style.backgroundColor = color;
        div.style.color = textColor;
        div.textContent = color + "\n" + hex;
        div.addEventListener("click", function() {
         navigator.clipboard.writeText(color + " " + hex);
        });
    palette.appendChild(div);
  }
}