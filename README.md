
# BMI Calculator App

This is a simple BMI (Body Mass Index) calculator app built using HTML, CSS, and JavaScript. It 
allows users to calculate their BMI based on their weight and height and provides a category 
classification based on the calculated BMI value.

### Features

- Input fields for weight (in kilograms) and height (in centimeters).
- Calculates BMI based on the provided weight and height.
- Displays the calculated BMI value and category classification.
- Provides basic input validation to ensure valid weight and height are entered.
- Has a responsive design to adapt to any screen size.

The app is built using basic ```HTML``` , ```CSS``` and ```JavaScript``` . 

### Structure

The main structure of the app consists of a basic head and body. It includes appropriate use of 
semantic elements such as ```<main>``` and ```<form>```. The ```<form>``` element comprises of two 
text boxes that takes input (height and weight) and a button to get the result.

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

Every style aligns with the background and theme of the app. It has a themed background in blue and 
white. Most importantly, the inline form elements are displayed in block by making use of ```CSS``` 
display properties.

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
The working of this application is entirely based on ```JavaScript``` functions. The code is 
designed and written in a way that it is easy to understand by the beginners. It initially validates 
the input via function followed by returning the appropriate output (BMI Value and category) upon 
clicking the calculate button via an event listener.

1. Utility function: The utility function, named ```select``` , allows to find and return the first 
element within a specified parent element that matches the given CSS selector. It takes two 
parameters: ```selector``` , which is the CSS selector used to select the desired element, and 
```parent``` , which is the optional parent element within which to search for the element. If no 
parent element is provided, it defaults to the ```document``` object, meaning it will search within 
the entire HTML document. The function then returns the first matching element found, or ```null``` 
if no match is found.

```JAVASCRIPT
function select(selector, parent = document) {
  return parent.querySelector(selector);
}
```

2. calculateBMI Function: This function is executed when the 'click' event occurs on the button. It 
performs the following steps:
- It retrieves the user's weight and height from input fields in the HTML document.
- It checks if the weight and height values are valid numbers and greater than zero. If not, it 
displays an error message asking the user to enter valid weight and height.
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

- It finds the first object in the cases array where the condition is true for the calculated BMI 
value.
- It retrieves the category from the found object.

```JAVASCRIPT
let category = cases.find(condition => condition.condition).category;
```

- It updates the content of an element with the class 'result' to display the calculated BMI value 
and the corresponding category.

```JAVASCRIPT
  value.textContent = `BMI = ${bmi.toFixed(2)}`;
  type.textContent = `You are ${category}`;
```

3. Event Listener: An event listener is attached to the element with the class 'calculate'. It 
listens for a 'click' event on that element, and when the button is clicked, it calls the 
calculateBMI function.
```JAVASCRIPT
calculateButton.addEventListener('click', calculateBMI);
```

### Contributions

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue 
or create a pull request.

## Demo
Click [here](https://navjot0210.github.io/bmi-calculator/) to test the application.