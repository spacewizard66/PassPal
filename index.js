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
			"Z"
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
			"z"
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
			"9"
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
			"#"
		]);
	}
	// Randomizer that picks characters for password //
	var password = "";
	for (let i = 0; i < len; i++) {
		password += chars[Math.floor(Math.random() * chars.length)];
	}
	showPassword(password);
}


const body = document.body;
const nav = document.body.querySelector(".nav");
const main = document.body.querySelector(".main");
const settings = document.body.querySelector(".settings");

// Dark Mode/Light Mode Toggle Button
darkModeButton = document.querySelector(".nav__toggle");
darkModeButton.addEventListener('click', () => {
	nav.classList.toggle("nav--active");
	body.classList.toggle("body--active");
	main.classList.toggle("main--active");
	slider.classList.toggle("slider--active");
	settings.classList.toggle("settings--active");
});


const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider__title");

// Sets default slider value //
sliderValue.setAttribute("data-length", 35);
// Using Event Listener to the slider change value accordingly //
slider.querySelector("input").addEventListener("input", (event) => {
	sliderValue.setAttribute("data-length", event.target.value);
});


// Checks which options are selected and plugs in to Password Generator //
const uppercase = document.getElementById("uppercase").checked;
const lowercase = document.getElementById("lowercase").checked;
const number = document.getElementById("number").checked;
const symbol = document.getElementById("symbol").checked;
const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", () => {
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

// Error if no option is selected //
function showError() {
	document.getElementById("result").innerText = "Please select at least one attribute";
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