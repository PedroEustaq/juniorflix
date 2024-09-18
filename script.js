
const sections = document.querySelectorAll('.rodar');

sections.forEach(section => {
    section.addEventListener('wheel', (event) => {
        event.preventDefault(); // Impede a rolagem vertical
        section.scrollLeft += event.deltaY; // Ajusta a rolagem horizontal
    });
});





document.getElementById('topsI').addEventListener('click', function() {
    document.getElementById('topDia').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('homeI').addEventListener('click', function() {
    document.getElementById('exemplo').scrollIntoView({ behavior: 'smooth' });
});