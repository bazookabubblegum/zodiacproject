// array of objects to store zodiac data
var zodiac = [
	{
		image1: "",
		sign: "aquarius",
		obstacles: "",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		ruling planet: "",
		companions: "",
		image: "images/aquarius.png",
	},
	{
		image1: "",
		sign: "aries",
		obstacles: "",
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		ruling planet: "",
		companions: "",
		image: "images/aries.png"
	},
	{
		image1: "",
		sign: "cancer",
		obstacles: "",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		ruling planet: "",
		companions: "",
		image: "images/cancer.png"
	},
	{
		image1: "",
		sign: "capricorn",
		obstacles: "",
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		ruling planet: "",
		companions: "",
		image: "images/capricorn.png"
	},
	{
		image1: "",
		sign: "gemini",
		obstacles: "",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		ruling planet: "",
		companions: "",
		image: "images/gemini.png"
	},
	{
		image1: "",
		sign: "leo",
		obstacles: "",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		ruling planet: "",
		companions: "",
		image: "images/leo.png"
	},
	{
		image1: "",
		sign: "libra",
		obstacles: "",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		ruling planet: "",
		companions: "",
		image: "images/libra.png"
	},
	{
		image1: "",
		sign: "pisces",
		obstacles: "",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		ruling planet: "",
		companions: "",
		image: "images/pisces.png"
	},
	{
		image1: "",
		sign: "sagittarius",
		obstacles: "",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		rulingplanet: "",
		companions: "",
		image: "images/sagittarius.png"
	},
	{
		image1: "",
		sign: "scorpio",
		obstacles: "",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		rulingplanet: "",
		companions: "",
		image: "images/scorpio.png"
	},
	{
		image1: "",
		sign: "taurus",
		obstacles: "",
		fortune: "	Security, Subtle strength, Appreciation, Instruction, Patience",
		rulingplanet: "",
		companions: "",
		image: "images/taurus.png"
	},
	{
		image1: "",
		sign: "virgo",
		obstacles:
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		rulingplanet: "",
		companions: "",
		image: "img/virgo2.jpg"
	}
];
// This is some sweet code so the enter key also implements the function
var btn = document.getElementById('userdata');
btn.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		horoscope();
	};
}, false);

// function to determine user horoscope, function fires on user clicking button line 24 index.html
function horoscope() {
	// store the tag with id="sign" in var userdata
	var userdata = document.getElementById("userdata");


	// loop through 
	for(var i = 0; i < zodiac.length; i = i + 1) {
		//capitilization doesnt matter
		console.log("users value lowercase is: " + userdata.value.toLowerCase());
		// check the current item's sign in the zodiac array
		console.log("current zodiac sign in loop is: " + zodiac[i].sign);

		// if the value the user typed in, changed to all lowercase letters, is equal to one of our signs, then we do something
		if(userdata.value.toLowerCase() === zodiac[i].sign) {
			

			console.log("users typed in: " + userdata.value);
			console.log("current image value is: " + zodiac[i].image);
			console.log("current fortune value is: " + zodiac[i].fortune);

			// get element with id="userSign" and change the text to the user input
			document.getElementById("yourSign").textContent = userdata.value;
			// get element with id="icon" and change source attribute to current zodiac image path
			document.getElementById("icon").src = zodiac[i].image;

			// // get element with id="yourHoroscope" and change the content to this concatenated string
			document.getElementById("yourHoroscope").textContent = "Your fortune is: " + zodiac[i].fortune;

			document.getElementById("yourHoroscope").textContent = "Your ruling planet is: " + zodiac[i].rulingplanet;

			document.getElementById("yourHoroscope").textContent = "Your obstacles include: " + zodiac[i].obstacles;

			document.getElementById("yourHoroscope").textContent = "Your harmonizing zodiac companions are: " + zodiac[i].companion;
			// stop the function because we found a match and added the data to the screen!!!
			return;
		};

		// confirm no matches are found if that's the case
		console.log("no matches were found, user failed to type in a correct zodiac sign");

		// if no match is found, do opposite of above, mostly clearing content and images
		document.getElementById("yourSign").textContent = "This is not a Zodiac Sign, Please try again.";
		document.getElementById("yourHoroscope").textContent = "";
		document.getElementById("icon").src = "";
	};
};
