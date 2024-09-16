
const sections = document.querySelectorAll('.Stable');

sections.forEach(section => {
    section.addEventListener('wheel', (event) => {
        event.preventDefault(); // Impede a rolagem vertical
        section.scrollLeft += event.deltaY; // Ajusta a rolagem horizontal
    });
});