// Logic for password generation //
function passwordGenerate(len, upper, lower, number, symbol) {
	if (!upper && !lower && !number && !symbol) {
		return showError();
	}

	// Adds characters to randomizer if attributes are true //
	var chars = [];
	if (upper) {
		chars = chars.concat([
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
			"G",
			"H",
			"I",
			"J",
			"K",
			"L",
			"M",
			"N",
			"O",
			"P",
			"Q",
			"R",
			"S",
			"T",
			"U",
			"V",
			"W",
			"X",
			"Y",
			"Z",
		]);
	}
	if (lower) {
		chars = chars.concat([
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z",
		]);
	}
	if (number) {
		chars = chars.concat([
			"0",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
		]);
	}
	if (symbol) {
		chars = chars.concat([
			"!",
			"@",
			"$",
			"%",
			"&",
			"*",
			"(",
			")",
			"-",
			"+",
			"?",
			"#",
		]);
	}

	// Randomizer that picks characters for password //
	var password = "";
	for (let i = 0; i < len; i++) {
		password += chars[Math.floor(Math.random() * chars.length)];
	}
	showPassword(password);
}


body = document.body;
nav = document.body.querySelector(".nav");
main = document.body.querySelector(".main");
settings = document.body.querySelector(".settings");
x = document.body.querySelector(".slider");
// Dark Mode/Light Mode Toggle Button
darkModeButton = document.querySelector(".nav__toggle");
darkModeButton.addEventListener('click', () => {
	nav.classList.toggle("nav--active");
	body.classList.toggle("body--active");
	main.classList.toggle("main--active");
	x.classList.toggle("slider--active");
	settings.classList.toggle("settings--active");
});


const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider__title");
const sliderProperties = {
	fill: "#38EF7D",
	background: "rgba(255, 255, 255, 0.214)",
};

// Using Event Listener to apply the fill and change value of text //
slider.querySelector("input").addEventListener("input", (event) => {
	sliderValue.setAttribute("data-length", event.target.value);
	applyFill(event.target);
});

// Selecting range input and passing it to applyFill function //
applyFill(slider.querySelector("input"));

// Function responsible for creating the trailing color and setting the fill //
function applyFill(slider) {
	// Calculates slider % //
	const percentage =
		(100 * (slider.value - slider.min)) / (slider.max - slider.min);

	// Uses % to calculate gradient color background //
	const bg = `linear-gradient(90deg, ${sliderProperties.fill
		} ${percentage}%, ${sliderProperties.background} ${percentage + 0.1}%)`;

	// Sets slider gradient background //
	slider.style.backround = bg;
	sliderValue.setAttribute("data-length", slider.value);
}

// Checks which options are selected and plugs in to Password Generator //
const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", () => {
	let uppercase = document.getElementById("uppercase").checked;
	let lowercase = document.getElementById("lowercase").checked;
	let number = document.getElementById("number").checked;
	let symbol = document.getElementById("symbol").checked;
	passwordGenerate(
		sliderValue.getAttribute("data-length"),
		uppercase,
		lowercase,
		number,
		symbol
	);
});

const copyInfo = document.querySelector(".result__info.right");
const copiedInfo = document.querySelector(".result__info.left");
const copyBtn = document.querySelector("#copy-btn");

function showPassword(password) {
	document.getElementById("result").innerText = password;
	if (!document.getElementById("copy-btn")) {
		document.querySelector(".result").innerHTML +=
			'<button id="copy-btn" onclick="copyPassword()"><img src="icon/copy.svg" width="16px"></button>';
	}
	// document.querySelector('.result').innerHTML += '<button id="copy-btn" onclick="copyPassword()"><img src="copy.svg" width="16px"></button>'; //
}

// If no option is selected //
function showError() {
	document.getElementById("result").innerText =
		"Please select at least one attribute";
	if (document.getElementById("copy-btn")) {
		document.getElementById("copy-btn").remove();
	}
}

// Copy password to clipboard //
function copyPassword() {
	const textarea = document.createElement("textarea");
	const password = document.getElementById("result").innerText;
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();
}

// Getting current year for footer //
var d = new Date();
var currYear = d.getFullYear();
document.querySelector(
	".footer__copyright"
).innerText = `© ${currYear}, Made with ❤️ by Mason Galat.`;



// Disable right click //
/* document.addEventListener(
	"contextmenu",
	function (e) {
		e.preventDefault();
	},
	false
);
 */