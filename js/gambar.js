// Mengambil elemen-elemen yang diperlukan
const drawingArea = document.getElementById('drawingArea');
const clearButton = document.getElementById('clearButton');
const context = drawingArea.getContext('2d');
let isDrawing = false;

// Mengatur warna dan lebar garis
context.strokeStyle = 'black';
context.lineWidth = 2;

// Mengatur event listener ketika tombol mouse ditekan
drawingArea.addEventListener('mousedown', () => {
    isDrawing = true;
    context.beginPath();
    context.moveTo(event.clientX - drawingArea.getBoundingClientRect().left, event.clientY - drawingArea.getBoundingClientRect().top);
});

// Mengatur event listener ketika mouse bergerak
drawingArea.addEventListener('mousemove', () => {
    if (isDrawing) {
        context.lineTo(event.clientX - drawingArea.getBoundingClientRect().left, event.clientY - drawingArea.getBoundingClientRect().top);
        context.stroke();
    }
});

// Mengatur event listener ketika tombol mouse dilepas
drawingArea.addEventListener('mouseup', () => {
    isDrawing = false;
    context.closePath();
});

// Event listener untuk tombol 'Hapus'
clearButton.addEventListener('click', () => {
    context.clearRect(0, 0, drawingArea.width, drawingArea.height);
});
