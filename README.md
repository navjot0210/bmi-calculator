
## BMI Calculator App

This is a simple BMI (Body Mass Index) calculator app built using HTML, CSS, and JavaScript. It 
allows users to calculate their BMI based on their weight and height and provides a category 
classification based on the calculated BMI value.

### Features

- Input fields for weight (in kilograms) and height (in centimeters).
- Calculates BMI based on the provided weight and height.
- Displays the calculated BMI value and category classification.
- Provides basic input validation to ensure valid weight and height are entered.
- Has a responsive design to adapt to any screen size.
<br>
The app is built using basic ```HTML```, ```CSS``` and ```JavaScript```. 

### Structure

The main structure of the app consists of a basic head and body. It includes appropriate use of semantic elements such as ```<main>``` and ```<form>```. The ```<form>``` element comprises of two text boxes that takes input (height and weight) and a button to get the result.

```HTML
<form>
  <label for="weight">Weight (kg):</label>
  <input type="text" class="weight" placeholder="Enter weight here">
  <label for="height">Height (cm):</label>
  <input type="text" class="height" placeholder="Enter height here">
  <input type="button" class="calculate" value="Calculate">
</form>
```

### Style

Every style aligns with the background and theme of the app. It has a themed background in blue and white. Most importantly, the inline form elements are displayed in block by making use of ```CSS``` display properties.

```css
input[type=text], input[type=button] {
  height: 55px;
  border-radius: 5px;
  font-size: 22px;
}

input[type=text] {
  width: 400px;
  margin: 12px 0 25px;
  padding: 0 15px;
  box-shadow: 0 0 1.5px 0.5px rgb(244 243 255 / 0.55);
  background-color: transparent;
  display: block;

}

input[type=button] {
  width: 150px;
  height: 56px;
  margin-top: 18px;
  background-color: #0067ff;
  border: 1px solid #0067ff;
  font-weight: 600;
  cursor: pointer;
  transform: color 0.25s ease-in-out;
}

input[type=button]:hover {
  background-color: rgb(41 123 245);
}
```

### Functionality
The working of this application is entirely based on ```JavaScript``` functions. The code is designed and written in a way that it is easy to understand by the beginners. It initially validates the input via function followed by returning the appropriate output (BMI Value and category) upon clicking the calculate button via an event listener.

1. calculateBMI Function: This function is executed when the 'click' event occurs on the button. It performs the following steps:
- It retrieves the user's weight and height from input fields in the HTML document.
- It checks if the weight and height values are valid numbers and greater than zero. If not, it displays an error message asking the user to enter valid weight and height.
- It converts the height from centimeters to meters by dividing it by 100.

```JAVASCRIPT
if (isNaN(weight) || isNaN(height) || weight === 0 || height === 0) {
    value.textContent = "Please enter valid weight and height.";
    type.textContent = ``;
    return;
  }
```

- It calculates the BMI using the formula: weight / (height * height).

```JAVASCRIPT
let bmi = weight / (height * height);
```

- It defines an array cases containing objects with conditions and corresponding BMI categories.

```JAVASCRIPT
let cases = [
    { condition: bmi < 18.5, category: "underweight! (Eat more)" },
    { condition: bmi >= 18.5 && bmi < 25, category: "healthy!" },
    { condition: bmi >= 25 && bmi < 30, category: "overweight! (Eat less)" },
    { condition: true, category: "obese! (See a doctor)" }
  ];
```

- It finds the first object in the cases array where the condition is true for the calculated BMI value.
- It retrieves the category from the found object.

```JAVASCRIPT
let category = cases.find(condition => condition.condition).category;
```

- It updates the content of an element with the class 'result' to display the calculated BMI value and the corresponding category.

```JAVASCRIPT
  value.textContent = `BMI = ${bmi.toFixed(2)}`;
  type.textContent = `You are ${category}`;
```

2. Event Listener: An event listener is attached to the element with the class 'calculate'. It listens for a 'click' event on that element, and when the button is clicked, it calls the calculateBMI function.
```JAVASCRIPT
calculateButton.addEventListener('click', calculateBMI);
```