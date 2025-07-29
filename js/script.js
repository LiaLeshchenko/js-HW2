function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

const sliderInput = document.querySelector(".slider__input");
const sliderImage = document.querySelector(".slider__image");

function resizeImage() {
  const size = sliderInput.value;
  sliderImage.style.width = `${size * 3}px`;
  sliderImage.style.height = "auto";
}

const debouncedResize = debounce(resizeImage, 200);

sliderInput.addEventListener("input", debouncedResize);

const box = document.getElementById("box");

box.style.position = "absolute";

const moveBox = (event) => {
  box.style.left = event.clientX + "px";
  box.style.top = event.clientY + "px";
};

const debouncedMove = _.debounce(moveBox, 20);

document.addEventListener("mousemove", debouncedMove);
