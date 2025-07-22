document.getElementById("calculate-btn").addEventListener("click", function () {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
  
    if (!height || !weight || height <= 0 || weight <= 0) {
      alert("Please enter valid height and weight!");
      return;
    }
  
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    document.getElementById("bmi-result").textContent = bmi;
  
    let status = "";
    if (bmi < 18.5) {
      status = "Underweight";
      document.getElementById("bmi-status").style.color = "#ffc107";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      status = "Normal";
      document.getElementById("bmi-status").style.color = "#28a745";
    } else if (bmi >= 25 && bmi < 29.9) {
      status = "Overweight";
      document.getElementById("bmi-status").style.color = "#ff851b";
    } else {
      status = "Obese";
      document.getElementById("bmi-status").style.color = "#dc3545";
    }
    document.getElementById("bmi-status").textContent = status;
  });
  