// array of objects to store zodiac data
var zodiac = [
	{
		image1: "img/aquarius2.jpg",
		sign: "aquarius",
		obstacles: "",
		fortune: "",
		rulingplanet: "",
		companions: "",
		elemental: "",
		image: "img/aquarius.jpg",
		dates: ""
	},
	{
		image1: "img/aries2.jpg",
		sign: "aries",
		obstacles: "You, yourself, can be challenging, and guilt is not too far behind for what has not been accomplished. Let things go, and remember you are constantly changing. You burn out fast, as your element suggests you may also burn out others. Keep the peace by letting go of rigidity. You may be on the mountain, but you are designed of different particle patterns.",
		fortune: "You are ambitious and impulsive. Intention sees no bounds within you. Each day will bring you closer to the goals you wish to conquer. As a Ram, you attack things head on, but you can sidestep solutions even on the steepest mountain tops.",
		rulingplanet: "Mars",
		companions: "",
		elemental: "Fire",
		image: "img/aries.jpg"
		dates: ""
	},
	{
		image1: "img/cancerAMRITBAR.jpg",
		sign: "cancer",
		obstacles: "",
		fortune: "",
		rulingplanet: "",
		companions: "",
		elemental: "",
		image: "img/cancer.jpg"
		dates: ""
	},
	{
		image1: "img/capricornBLACKBIRD.jpg",
		sign: "capricorn",
		obstacles: "",
		fortune: "",
		rulingplanet: "",
		companions: "",
		elemental: "",
		image: "img/capricornMARDELRUBIO.jpg"
		dates: ""
	},
	{
		image1: "img/gemini1.jpg",
		sign: "gemini",
		obstacles: "",
		fortune: "",
		rulingplanet: "",
		companions: "",
		elemental: "",
		image: "img/gemini.jpg"
		dates: ""
	},
	{
		image1: "img/leo3.jpg",
		sign: "leo",
		obstacles: "",
		fortune: "",
		rulingplanet: "",
		companions: "",
		elemental: "",
		image: "img/leo.jpg"
		dates: ""
	},
	{
		image1: "img/libra1.jpg",
		sign: "libra",
		obstacles: "",
		fortune: "",
		rulingplanet: "",
		companions: "",
		elemental: "",
		image: "img/libra2.jpg"
		dates: ""
	},
	{
		image1: "img/pisces1.jpg",
		sign: "pisces",
		obstacles: "",
		fortune: "",
		rulingplanet: "",
		companions: "",
		elemental: "",
		image: "img/pisces2.jpg"
		dates: ""
	},
	{
		image1: "img/sagitarus.jpg",
		sign: "sagittarius",
		obstacles: "",
		fortune: "",
		rulingplanet: "",
		companions: "",
		elemental: "",
		image: "img/sagitarius1.jpg"
		dates: ""
	},
	{
		image1: "img/scorpioBIRDBLACK.jpg",
		sign: "scorpio",
		obstacles: "",
		fortune: "",
		rulingplanet: "",
		companions: "",
		elemental: "",
		image: "img/scorpio.jpg"
		dates: ""
	},
	{
		image1: "img/taurus1.jpg",
		sign: "taurus",
		obstacles: "",
		fortune: "",
		rulingplanet: "Venus",
		companions: "",
		elemental: "",
		image: "img/taurus2.png"
		dates: ""
	},
	{
		image1: "img/virgo2.jpg",
		sign: "virgo",
		obstacles:
		fortune: "",
		rulingplanet: "",
		companions: "",
		elemental: "",
		image: "img/virgo.jpg"
		dates: ""
	}
];
//should run through zodiac array
function horoscope() {
	// store the tag with id="sign" in var userdata
	var userdata = document.getElementById("userdata");

// function to determine user horoscope
	var userdata = document.getElementById("yourSign");

	// loop through 
	for(var i = 0; i < zodiac.length; i = i + 1) {

		// if the value the user typed in is lowercase letters
		if(userdata.value.toLowerCase() === zodiac[i].sign) {

			// get element with id="userSign" and change the text to the user input
			document.getElementById("yourSign").textContent = userdata.value;
			// get element with id="icon" and change source attribute to current zodiac image path
			document.getElementById("icon").src = zodiac[i].image;

			// get element with id="yourHoroscope" and change the content to this concatenated string
			document.getElementById("yourHoroscope").textContent = "Your fortune is: " + zodiac[i].fortune;

			document.getElementById("yourHoroscope").textContent = "Your ruling planet is: " + zodiac[i].rulingplanet;

			document.getElementById("yourHoroscope").textContent = "Your obstacles include: " + zodiac[i].obstacles;

			document.getElementById("yourHoroscope").textContent = "Your harmonizing zodiac companions are: " + zodiac[i].companion;

			document.getElementById("yourHoroscope").textContent = "Your elemental balance is: " + zodiac[i].elemental;

			document.getElementById("yourHoroscope").textContent = "Dates of this Horoscope: " + zodiac[i].dates;

			// stop the function because we found a match and added the data to the screen!!!
			return;
		};
	};
};
