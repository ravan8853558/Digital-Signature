const nameInput = document.getElementById("nameInput");
const generateBtn = document.getElementById("generateBtn");
const canvas = document.getElementById("signatureCanvas");
const downloadBtn = document.getElementById("downloadBtn");

const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 150;

generateBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (!name) {
    alert("Please enter a name!");
    return;
  }

  // Clear Canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set Font and Style
  ctx.font = "italic 48px 'Brush Script MT', cursive";
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Draw Name
  ctx.fillText(name, canvas.width / 2, canvas.height / 2);

  // Show Download Button
  downloadBtn.style.display = "inline-block";

  // Set Download Link
  downloadBtn.href = canvas.toDataURL("image/png");
});
