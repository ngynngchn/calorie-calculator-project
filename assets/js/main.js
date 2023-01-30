//* Variables ===============

//* input
const height = document.querySelector("#height");
const age = document.querySelector("#age");
const weight = document.querySelector("#weight");
const sex = document.querySelector('input[type="radio"]');

const female = document.querySelector("#female");
const male = document.querySelector("#male");
const activity = document.querySelector("#activity");

//* output

const bmr = document.querySelector("#bmr");
const calories = document.querySelector("#calories");

console.log(calories);

//* submit button

const submit = document.querySelector("input[type='submit']");

//* Functions ===============

const calculateBMR = () => {
	let result;
	if (male.checked) {
		result = 664.7 + 13.7 * weight.value + 5 * height.value - 6.8 * age.value;
	} else if (female.checked) {
		result = 655.1 + 9.6 * weight.value + 1.8 * height.value - 4.7 * age.value;
	}
	bmr.innerHTML = Math.floor(result);
	return result;
};

const calculateCalorieIntake = () => {
	let result = calculateBMR() * activity.value;
	calories.innerHTML = Math.floor(result);
};

submit.addEventListener("click", calculateCalorieIntake);
