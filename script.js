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

function generarPaleta() {
  palette.innerHTML = "";

  const cantidad = colorCount.value;

  for (let i = 0; i < cantidad; i++) {
    const color = generarColorHSL();

    const l = parseInt(color.split(",")[2]);
    const textColor = l > 50 ? "black" : "white";

    const div = document.createElement("div");
    div.classList.add("color-box");
    div.style.backgroundColor = color;
    div.style.color = textColor;
    div.textContent = color;

    palette.appendChild(div);
  }
}