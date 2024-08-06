
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed', {
        strings: [
            'Bienvenidos a OMNICOM.',
            'Soluciones Energéticas Integrales y Sostenibles.',
            'Proyectos exitosos en Colombia y Virginia.'
        ],
        typeSpeed: 50,     
        backSpeed: 50,  
        backDelay: 1500,   
        startDelay: 1000,  
        loop: true,         
        loopCount: Infinity,
        showCursor: true,   
        cursorChar: '|',   
        smartBackspace: true, 
        fadeOut: true,    
        fadeOutClass: 'typed-fade-out',  
        fadeOutDelay: 500, 
    });
});
