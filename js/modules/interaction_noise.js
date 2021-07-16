const px = {
  _1_shadow: "px-1-shadow",
  _1: "px-1",
  _2: "px-2",
};
const canvaNoise = document.createElement("div");
const pxNoise = px._1_shadow;

//const canvaPixel = document.createElement("div");
// function DivBox(col, row) {
//   var ret = "";
//   for (var r = 0; r < row / 1; r++) {
//     ret += '<div id="Column' + (r + 1) + '" style="float:left">';
//     for (var c = 0; c < col / 1; c++) {
//       ret += `<div class="canva-pixel type${Math.round(Math.random() * 10)}">`;

//       ret += "</div>";
//     }
//     ret += "</div>";
//   }
//   return ret;
// }
//canvaPixel.classList.add("canva-pixel");

canvaNoise.classList.add("canva-noise");
canvaNoise.classList.add(pxNoise);

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
