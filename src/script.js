// Selecting our elements
var sliderHandler = document.getElementsByClassName("clider-Handler")[0];
var sliderRange = document.getElementsByClassName("slider-Range")[0];
var sliderNumber = document.getElementsByClassName("slider-Number")[0];
// Global variables
var isDragging = false;
// Event listeners
sliderHandler.addEventListener("mousedown", function (event) {
    isDragging = true;
    var handleMouseMove = function (e) {
        if (isDragging) {
            var mouseX = e.clientX;
            var currentX = mouseX - sliderRange.getBoundingClientRect().left;
            // Calculate the maximum X value considering the width of the slider handle
            var maxX = sliderRange.offsetWidth - sliderHandler.offsetWidth;
            // Ensure the slider handle stays within the slider range
            var clampedX = Math.min(Math.max(currentX, 0), maxX);
            // Calculate the percentage position based on the width of the slider range
            var percentagePosition = (clampedX / maxX) * 100;
            sliderNumber.textContent = "".concat(Math.floor(percentagePosition));
            sliderHandler.style.left = "".concat(percentagePosition, "%");
        }
    };
    var handleMouseUp = function () {
        isDragging = false;
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
});
