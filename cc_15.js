//Coding Challenge #15

//Selects the riskDashboard container
const riskDashboard = document.getElementById('riskDashboard');

//Reads the console message
console.log("Risk Dashboard Loaded");

//Task 2: Adding Dynamic Risk Items

//Added addRiskItem function 
function addRiskItem(riskName, riskLevel, department){
    //Created a new risk card element
    const riskCard = document.createElement('div');
    riskCard.className = 'riskCard';

    //Created element to display risk details
    const riskInfo = document.createElement('p');
    riskInfo.textContent = `Risk: ${riskName} | Level: ${riskLevel} | Department: ${department}`;
    riskCard.appendChild(riskInfo);
    // Appends the risk card
    riskDashboard.appendChild(riskCard);
}

//Added form submission to add new risk items
const riskForm = document.getElementById('riskForm');
//Adding event listener
riskForm.addEventListener('submit', function(e){
    e.preventDefault();

    //Gets values from the form inputs
    const riskName = document.getElementById('riskName').value;
    const riskLevel = document.getElementById('riskLevel').value;
    const riskDepartment = document.getElementById('riskDepartment').value;

    addRiskItem(riskName, riskLevel, riskDepartment);
    riskForm.reset();

});

//Test Cases:
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");