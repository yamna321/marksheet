function calculateMarksheet() {
    const name = document.getElementById("name").value;
    const maths = parseFloat(document.getElementById("maths").value);
    const english = parseFloat(document.getElementById("english").value);
    const science = parseFloat(document.getElementById("science").value);
    const history = parseFloat(document.getElementById("history").value);

    // Validate inputs
    if (isNaN(maths) || isNaN(english) || isNaN(science) || isNaN(history)) {
        alert("Please enter valid marks for all subjects.");
        return;
    }

    const totalMarks = maths + english + science + history;
    const percentage = (totalMarks / 400) * 100;
    let grade = "";

    // Determine the grade based on percentage
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B+";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else {
        grade = "D";
    }

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Marksheet</h3>
        <p><strong>Student Name:</strong> ${name}</p>
        <p><strong>Total Marks:</strong> 400</p>
        <p><strong>Marks Obtained:</strong> ${totalMarks}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
}
