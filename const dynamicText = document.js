const dynamicText = document.getElementById('dynamicText');
const changeTextBtn = document.getElementById('changeTextBtn');
changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = "The text has been changed!";
    dynamicText.style.color = "red"; // Modify CSS style
});