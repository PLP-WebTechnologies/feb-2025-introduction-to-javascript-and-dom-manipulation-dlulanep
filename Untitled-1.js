// Change text content dynamically
const dynamicText = document.getElementById('dynamicText');
const changeTextBtn = document.getElementById('changeTextBtn');
changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = "The text has been changed!";
    dynamicText.style.color = "red"; // Modify CSS style
});

// Add or remove an element
const toggleElementBtn = document.getElementById('toggleElementBtn');
let elementAdded = false;
toggleElementBtn.addEventListener('click', () => {
    if (!elementAdded) {
        const newElement = document.createElement('p');
        newElement.id = 'newElement';
        newElement.textContent = "This is a dynamically added element.";
        document.body.appendChild(newElement);
        elementAdded = true;
    } else {
        const existingElement = document.getElementById('newElement');
        if (existingElement) {
            document.body.removeChild(existingElement);
        }
        elementAdded = false;
    }
});