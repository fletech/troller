const canvaNoise = document.createElement("div");
const canvaPixel = document.createElement("div");

canvaNoise.classList.add("canva-noise");
canvaPixel.classList.add("canva-pixel");

// function DivBox(col, row) {
//   var ret = "";
//   for (var r = 0; r < row / 2; r++) {
//     ret += '<div id="Column' + (r + 1) + '" style="float:left">';
//     for (var c = 0; c < col / 2; c++) {
//       ret += `<div class="canva-pixel type${Math.round(Math.random() * 10)}">`;

//       ret += "</div>";
//     }
//     ret += "</div>";
//   }
//   return ret;
// }

export const interaction_noise = (state, modal) => {
  if (state) {
    //canvaNoise.innerHTML = DivBox(modal.offsetHeight, modal.offsetWidth);
    modal.appendChild(canvaNoise);
    modal.classList.add("no-scroll");
    console.log("noise");
  }
  // if (modal == null) {
  //   modal.removeChild(canvaNoise);
  // }
};