const canvaNoise = document.createElement("div");
const canvaPixel = document.createElement("div");

canvaNoise.classList.add("canva-noise");
canvaPixel.classList.add("canva-pixel");

function DivBox(col, row) {
  var ret = "";
  for (var r = 0; r < row / 3; r++) {
    ret += '<div id="Column' + (r + 1) + '" style="float:left">';
    for (var c = 0; c < col / 3; c++) {
      ret += `<div class="canva-pixel type${Math.round(Math.random() * 10)}">`;

      ret += "</div>";
    }
    ret += "</div>";
  }
  return ret;
}

export const noise = (state, modal) => {
  if (state) {
    console.log(modal.offsetWidth);
    console.log(modal.offsetHeight);
    canvaNoise.innerHTML = DivBox(modal.offsetHeight, modal.offsetWidth);
    modal.appendChild(canvaNoise);
    modal.classList.add("no-scroll");
  }
};
