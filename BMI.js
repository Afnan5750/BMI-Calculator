document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    let bmi = weight / (height / 100) ** 2;

    let result = '';

    if (isNaN(bmi)) {
        result = 'Invalid input! Please enter valid height and weight.';
    } else {
        result = `Your BMI is ${bmi.toFixed(2)}. `;

        if (bmi < 18.5) {
            result += 'You are underweight.';
        } else if (bmi >= 18.5 && bmi < 25) {
            result += 'You have a normal weight.';
        } else if (bmi >= 25 && bmi < 30) {
            result += 'You are overweight.';
        } else {
            result += 'You are obese.';
        }
    }

    document.getElementById('result').textContent = result;
});