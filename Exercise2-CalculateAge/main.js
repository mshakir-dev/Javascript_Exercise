const calculateAge = document.getElementById('calculateAge');
const resetAge = document.getElementById('resetAge');
let dateMethod = new Date();

calculateAge.addEventListener('click', showAge);
resetAge.addEventListener('click', resetAgeFunction);

function showAge() {
    let yearBorn = document.getElementById('yearBorn').value;
    let name = document.getElementById('name').value;

    if(name === "") {
        alert("Please enter the Name Field");
    }

    else {
        const outputBox = document.getElementById('outputBox');
        const currentYear = dateMethod.getFullYear();
        const answer = currentYear - yearBorn;
    
        let output = document.createElement('h3');
        let outputText = document.createTextNode(`Hi ${name}, you are ${answer} years old.`)
        output.setAttribute('id', 'output');
        output.appendChild(outputText);
        outputBox.appendChild(output);
        // It will disable the button to work calculate the Age.
        calculateAge.style.pointerEvents = "none";
    }

}

function resetAgeFunction() {
    const output = document.getElementById('output');
    output.remove();
    resetAge.style.pointerEvents = "none";
}