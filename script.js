// 1. Define Multi-Dimensional Array studentData
// Format: [Name (String), Credit Hour (Number), Current GPA (Number)]
const studentData = [
    ["Azib", 18, 3.85],
    ["Jeevan", 12, 3.40],
    ["Pavitran", 20, 4.00],
    ["Basheer", 15, 3.50],
    ["Eashen", 10, 3.95]
];

// 2. Create function to measure dean list eligibility using conditional statement
function checkEligibility(creditHours, gpa) {
    if (creditHours >= 15 && gpa >= 3.50) {
        return "<span class='eligible'>✓ Dean's List Eligible</span>";
    } else {
        return "<span class='not-eligible'>✗ Not Dean's List Eligible</span>";
    }
}

// Function to display all students
function displayStudents() {
    const resultsContainer = document.getElementById('resultsContainer');
    
    if (studentData.length === 0) {
        resultsContainer.innerHTML = "<div class='empty-state'>No student records yet. Add a student above!</div>";
        return;
    }

    let output = "";

    // 3. Create Looping (for loop) to print student data
    for (let i = 0; i < studentData.length; i++) {
        output += "<div class='student-card'>";
        output += "<b>Name:</b> " + studentData[i][0] + "<br>";
        output += "<b>Credit Hours:</b> " + studentData[i][1] + "<br>";
        output += "<b>Current GPA:</b> " + studentData[i][2] + "<br>";
        output += "<hr>";
        output += "<b>Status:</b> " + checkEligibility(studentData[i][1], studentData[i][2]);
        output += "</div>";
    }

    resultsContainer.innerHTML = output;
}

// Handle form submission
document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('studentName').value.trim();
    const creditHours = parseFloat(document.getElementById('creditHours').value);
    const gpa = parseFloat(document.getElementById('currentGPA').value);

    // Validate GPA range
    if (gpa < 0 || gpa > 4) {
        alert('GPA must be between 0 and 4.00');
        return;
    }

    // Add new student to array
    studentData.push([name, creditHours, gpa]);

    // Clear form
    document.getElementById('studentForm').reset();

    // Refresh display
    displayStudents();

    // Show success message
    alert('Student record added successfully!');
});

// Initial display
displayStudents();