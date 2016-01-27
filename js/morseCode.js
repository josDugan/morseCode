var morseCode = {
	A: ".-   ",
	B: "-... ",
	C: "-.-. ",
	D: "-..  ",
	E: ".    ",
	F: "..-. ",
	G: "--.  ",
	H: ".... ",
	I: "..   ",
	J: ".--- ",
	K: "-.-  ",
	L: ".-.. ",
	M: "--   ",
	N: "=.   ",
	O: "---  ",
	P: ".--. ",
	Q: "--.- ",
	R: ".-.  ",
	S: "...  ",
	T: "-    ",
	U: "..-  ",
	V: "...- ",
	W: ".--  ",
	X: "-..- ",
	Y: "-.-- ",
	Z: "--.. ",
	'1': ".----",
	'2': "..---",
	'3': "...--",
	'4': "....-",
	'5': ".....",
	'6': "-....",
	'7': "--...",
	'8': "---..",
	'9': "----.",
	'10': "-----",
	" ": "  | ",
	".": ".-.-.-",
	",": "--..--",
	":": "---...",
	"?": "..--..",
	"'": ".----.",
	"-": "-....-",
	"/": "-....-",
	"(": "-.--.-",
	")": "-.--.-",
	"\"": ".-..-.",
	"@": ".--.-.",
	"=": "-...-" 
}

var translator = new Object();

console.log("This is a Morse code translator");
translator.input = prompt("Enter some text to translate into Morse code");
translator.output = "";
translator.translate = function() {
	var input = translator.input.toUpperCase();
	input.trim();
	var inputArray = input.split("");
    for (let character of inputArray) {
        translator.output += morseCode[character] + " ";
    }

    return  translator.output;
};

console.log(translator.translate());

