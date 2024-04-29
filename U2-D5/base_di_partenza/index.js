document.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 400) { // Imposta qui la soglia di scroll
        header.style.backgroundColor = '#ffffff'; // Cambia a bianco
    } else {
        header.style.backgroundColor = '#ffc017'; // Torna a giallo
    }
});
