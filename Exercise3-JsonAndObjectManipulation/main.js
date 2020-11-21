let database = '{\"firstname\": \"Muhammad\", \"middleinitial\": \"M\", \"lastname\": \"Shakir\", \"address\": \"924 Griffin Ave\", \"city\": \"Gadsden\", \"state\": \"AL\", \"zip\": \"35903\"}';

let object = JSON.parse(database);
// console.log("Before Conversion: - ", typeof database); // console.log("After Conversion: - ", typeof object);

const jsonOutput = document.getElementById('jsonOutput');
const conversionStringtoObjects = document.getElementById('conversionStringtoObjects');

const jsonOutputObjects = document.getElementById('jsonOutputObjects');
const conversionObjectManipulation = document.getElementById('conversionObjectManipulation');

conversionStringtoObjects.addEventListener('click', showconversionStringtoObjects);
conversionObjectManipulation.addEventListener('click', showconversionObjectManipulation);

function showconversionStringtoObjects() {
    jsonOutput.innerHTML = `
        <strong> Your Full Information:</strong> <br>
    ${object.firstname} <span> ${object.middleinitial} </span> ${object.lastname} <br>
    ${object.address} <br>
    ${object.city} , ${object.state} ${object.zip}`;
}

function showconversionObjectManipulation() {
    let employees = [
        {fname: 'Muhammad', lname: 'Shakir', age: 27},
        {fname: 'Abdul', lname: 'Basit', age: 33},
        {fname: 'Sumair', lname: 'Munawar', age: 31},
        {fname: 'Munawar', lname: 'Ibrahim', age: 65}];        
        let answer = " <h4> List Of All The Employees </h4>";
        for (let i = 0; i < employees.length; i++) {
        answer += `
            <ul class="list-group">
                <li class="list-group-item"><strong> Full Name: </strong> ${employees[i].fname} ${employees[i].lname}</li>
                <li class="list-group-item mb-2"><strong> Age:</strong> ${employees[i].age}</li>
            </ul>
        `;
    }
    jsonOutputObjects.innerHTML = `${answer} Total Employees: ${employees.length}`;
    // removeStringsObject();
}