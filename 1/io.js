document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggleButton');
    let isFunctionOne = true;

    function functionOne() {
        console.log('Function One executed');
    }

    function functionTwo() {
        console.log('Function Two executed');
    }

    button.addEventListener('click', function() {
        if (isFunctionOne) {
            functionOne();
        } else {
            functionTwo();
        }
        isFunctionOne = !isFunctionOne;
    });
});

const textBox = document.getElementById('textBox');
const button = document.getElementById('toggleButton');

button.addEventListener('click', () => {
    if (textBox.style.fontStyle === 'italic') {
        textBox.style.fontStyle = 'normal';
    } else {
        textBox.style.fontStyle = 'italic';
    }
});

