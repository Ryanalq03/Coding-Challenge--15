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

//Task 3 Removing Risk Items

//Modifies risk function to be able to remove items
function addRiskItem(riskName, riskLevel, department) {
   const riskCard = document.createElement('div');
   riskCard.className = 'riskCard';
   
   //Creates element to display risk details
   const riskInfo = document.createElement('button');
   resolveButton.textContent = 'Resolve';
   resolveButton.addEventListener('click', function(e) {
        e.stopPropagation(); //Adresses Task 6
        riskDashboard.removeChild(riskCard);
   });
   riskDashboard.appendChild(resolveButton);

   //Appends the risk card to dashboard
   riskDashboard.appendChild(riskCard);
}