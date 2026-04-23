const btn = document.getElementById("btn");
const palette = document.getElementById("palette");
const colorCount = document.getElementById("colorCount");

btn.addEventListener("click", generarPaleta);

function generarColorHSL() {
  const h = Math.floor(Math.random() * 360) ;
  const s = Math.floor(Math.random() * 100) ;
  const l = Math.floor(Math.random() * 100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

function generarPaleta() {
  palette.innerHTML = "";

  const cantidad = colorCount.value;

  for (let i = 0; i < cantidad; i++) {
    const color = generarColorHSL();

    const div = document.createElement("div");
    div.classList.add("color-box");
    div.style.backgroundColor = color;
    div.textContent = color;

    palette.appendChild(div);
  }
}