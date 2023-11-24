document.addEventListener('DOMContentLoaded', function() {
    let homeLink = document.getElementById('homelink');
    let aboutLink = document.getElementById('aboutlink');
    let portfolioLink = document.getElementById('portfoliolink');
    let blogLink = document.getElementById('bloglink');

    // Use buttons to toggle between views
    homeLink.addEventListener('click', function () {
        type();
    });

    function type() {
        const textElement = document.getElementById('text');
        textElement.textContent = '';
        const text = "hi, it's ";
        const name = "diandra";
        let index = 0;

        function typeCharacter() {
            if (index < text.length) {
                textElement.textContent += text[index];
            } else if (index < text.length + name.length) {
                textElement.innerHTML += `<span class="cursor-color">${name[index - text.length]}</span>`;
            }

            index++;

            if (index <= text.length + name.length) {
                setTimeout(typeCharacter, 100); // Adjust the typing speed (milliseconds)
            } else {
                document.getElementById('cursor').style.display = 'inline'; // Show the cursor
            }
        }
    
        typeCharacter();
    }

    type();
});