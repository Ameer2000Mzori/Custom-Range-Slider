// Selecting our elements
const sliderHandler = document.getElementsByClassName("clider-Handler")[0];
const sliderRange = document.getElementsByClassName("slider-Range")[0];
const sliderNumber = document.getElementsByClassName("slider-Number")[0];

// Global variables
let isDragging = false;

// Event listeners
sliderHandler.addEventListener("mousedown", (event) => {
  isDragging = true;

  const handleMouseMove = (e) => {
    if (isDragging) {
      const mouseX = e.clientX;
      const currentX = mouseX - sliderRange.getBoundingClientRect().left;

      // Calculate the maximum X value considering the width of the slider handle
      const maxX = sliderRange.offsetWidth - sliderHandler.offsetWidth;

      // Ensure the slider handle stays within the slider range
      const clampedX = Math.min(Math.max(currentX, 0), maxX);

      // Calculate the percentage position based on the width of the slider range
      const percentagePosition = (clampedX / maxX) * 100;

      sliderNumber.textContent = `${Math.floor(percentagePosition)}`;
      sliderHandler.style.left = `${percentagePosition}%`;
    }
  };

  const handleMouseUp = () => {
    isDragging = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
});
