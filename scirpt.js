function upDate(previewPic) {
  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt; // Update the text to the image's alt attribute
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`; // Set background image
  imageDiv.style.backgroundSize = "cover"; // Ensure the image covers the div
}

function undo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')"; // Remove the background image
  imageDiv.innerHTML = "Hover over an image below to display here."; // Reset the text
}
