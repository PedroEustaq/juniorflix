
const sections = document.querySelectorAll('.Stable');

sections.forEach(section => {
    section.addEventListener('wheel', (event) => {
        event.preventDefault(); // Impede a rolagem vertical
        section.scrollLeft += event.deltaY; // Ajusta a rolagem horizontal
    });
});




//remover cache
const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
stylesheets.forEach((sheet) => {
    sheet.href = `${sheet.href}?v=${new Date().getTime()}`;
});

const scripts = document.querySelectorAll('script');
scripts.forEach((script) => {
    script.src = `${script.src}?v=${new Date().getTime()}`;
});