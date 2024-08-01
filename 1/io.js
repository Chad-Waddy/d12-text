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
// 1224
document.addEventListener('DOMContentLoaded', () => {
    const textBox = document.getElementById('textBox');
    const toggleItalicButton = document.getElementById('toggleItalicButton');
    const cleanButton = document.getElementById('cleanButton');
    const btnBold = document.getElementById('btnBold');

    toggleItalicButton.addEventListener('click', () => {
        textBox.style.fontStyle = textBox.style.fontStyle === 'italic' ? 'normal' : 'italic';
    });

    cleanButton.addEventListener('click', () => {
        textBox.value = '';
    });
////
    btnBold.addEventListener('click', () => {
        textBox.style.fontWeight = textBox.style.fontWeight === 'bold' ? 'normal' : 'bold';
    });
});



// this si sthe in class btn 
document.getElementById("btnClear").addEventListener("click", clearText)

// add red btn funcion 




function red() {
    document.getElementById("writingArea").addEventListener("click", red)
}



//document.getElementById("textarea1").style.fontWeight = "bold";

function clearScreen() {
    document.getElementById('output').value = '';
}
// clear screen  event listener
document.getElementById("bt").addEventListener("click", bold);

    // bold function
    function boldC() {
        //document.getElementById(id).{style}.<property> = new style
        document.getElementById('writingarea').style.textAlign = 'center';
    }
    //  btnBold Event Listener
    document.getElementById("btnBold").addEventListener("click", boldC);




// what is the objective at this current moment
// ^ the currrent objective is to define all variables to the actions/ parents 
//^$ how are we going to do that 
    //^$ well in the last project we defined the equal variable through the straight action of (var) =

//this is the button that he sent 
    //just deleted the top buttton function that a think should be inline 

/// blue 




    // bold function
    function bold() {
        //document.getElementById(id).{style}.<property> = new style
        document.getElementById('writingarea').style.fontWeight = 'bold';
    }
    //  btnBold Event Listener
    document.getElementById("btnBold").addEventListener("click", bold);
    

      

















   // <Button class="border-2 border-sky-400 px-2" onclick="document.getElementById('writingarea').style.textAlign='center'"--</Button>>center</Button>




    // function resets 
    function reset() {
        document.getElementById("writingarea").value = ""
        // set text color to black
        //set bold to normal
        //set bold to normal
        //set italic to normal 
        //set text align to left
        //set text docoration to normal
        // set text transform to none
    }
    document.getElementById("btnreset").addEventListener("click", reset)


    //document.getElementById(id).{style}.<property> = new style

        //{style} breakdown
        // The Style object represents an individual style statement.