const pixelContainer = document.querySelector(".pixels-container");
console.log(pixelContainer);
export const interaction_pixel = () => {
  const pixelDiv = document.createElement("div");
  pixelContainer.appendChild(pixelDiv);
  pixelDiv.classList.add("pixel");
  pixelDiv.style.top = `${Math.floor(Math.random() * 100) + 1}%`;
  pixelDiv.style.left = `${Math.floor(Math.random() * 100) + 1}%`;

  return pixelDiv;
};
