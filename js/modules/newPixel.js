export const createNewPixel = (element) => {
  const pixelDiv = document.createElement("div");
  element.appendChild(pixelDiv);
  pixelDiv.classList.add("pixel");
  pixelDiv.style.top = `${Math.floor(Math.random() * 100) + 1}%`;
  pixelDiv.style.left = `${Math.floor(Math.random() * 100) + 1}%`;
  // pixelDiv.style.bottom = `${iteration * 5}px`;
  // pixelDiv.style.right = `${iteration * 5}px`;

  return pixelDiv;
};
