
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed', {
        strings: [
            'Welcome to OMNICOM.',
            'Integral and Sustainable Energy Solutions.',
            'Successful projects in Colombia and Virginia.'
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
