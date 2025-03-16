//Coding Challenge #15

//Selects the riskDashboard container
const riskDashboard = document.getElementById('riskDashboard');

//Reads the console message
console.log("Risk Dashboard Loaded");

//Task 4 Categorizing Risks by Level

//Adds function to return the risk color
function getRiskColor(level) {
    switch (level) {
        case "Low": return "green";
        case "Medium": return "yellow";
        case "High": return "red";
        default: return "white";
    }
}

//Task 2: Adding Dynamic Risk Items

//Added addRiskItem function 
function addRiskItem(riskName, riskLevel, department){
    //Created a new risk card element
    const riskCard = document.createElement('div');
    riskCard.className = 'riskCard';
//Task 4/sets background color based on risk level
riskCard.style.backgroundColor = getRiskColor(riskLevel);

    //Created element to display risk details
    const riskInfo = document.createElement('p');
    riskInfo.textContent = `Risk: ${riskName} | Level: ${riskLevel} | Department: ${department}`;
    riskCard.appendChild(riskInfo);


//Task 3/ creating the resolve button
const resolveButton = document.createElement('button');
resolveButton.textContent = 'Resolve';
resolveButton.addEventListener('click', function(e){
    e.stopPropagation(); //Task 6/prevents event bubbling
    riskDashboard.removeChild(riskCard);
});

//Appends the resolve button to riskcard
riskCard.appendChild(resolveButton);

//Appends the risk card to dashboard
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

//Task 5 Implemening Bulk Updates

//Increases risk level for all cards when clicked
const increaseRiskLevelButton = document.getElementById('increasesRiskLevels');
increaseRiskLevelButton.addEventListener('click', function() {
    //Selects all risk cards
    const riskCards = document.querySelectorAll('.riskCard');
    riskCards.forEach(function(card) {
        const riskInfo = card.querySelector('p');
        const parts = riskInfo.textContent.split('|').map(part => part.trim());
        let currentLevel = parts[1].split(':')[1].trim();
        let newLevel;
        if (currentLevel === "Low") {
            newLevel = "Medium";
        }
            else if (currentLevel === "Medium") {
            newLevel = "High";
            }
            else {
                newLevel = "High"; //If alr high it remains unchanged
            }
            //Updates risk info text
            const riskNameText = parts[0].split(':')[1].trim();
            const departmentText = parts[2].split(':')[1].trim();
            riskInfo.textContent = `Risk: ${riskNameText} | Level: ${newLevel} | Department: ${departmentText}`;
            //Updates color based on new risk
            card.style.backgroundColor = getRiskColor(newLevel);
    });
});
//Test Cases:
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Employee Retention", "Low", "HR");

