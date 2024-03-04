'use strict';

const calculateButton = document.querySelector('.calculate');
const value = document.querySelector('.result');
const type = document.querySelector('.comment');

function calculateBMI() {
  let weight = parseFloat(document.querySelector('.weight').value);
  let height = parseFloat(document.querySelector('.height').value) / 100; 
  // divided by 100 to convert cm to meters

  if (isNaN(weight) || isNaN(height) || weight === 0 || height === 0) {
    value.textContent = "Please enter valid weight and height.";
    type.textContent = ``;
    return;
  }

  let bmi = weight / (height * height);
  let cases = [
    { condition: bmi < 18.5, category: "underweight! (Eat more)" },
    { condition: bmi >= 18.5 && bmi < 25, category: "healthy!" },
    { condition: bmi >= 25 && bmi < 30, category: "overweight! (Eat less)" },
    { condition: true, category: "obese! (See a doctor)" }
  ];

  let category = cases.find(condition => condition.condition).category;

  value.textContent = `BMI = ${bmi.toFixed(2)}`;
 type.textContent = `You are ${category}`;
}

calculateButton.addEventListener('click', calculateBMI);