//1
//https://edabit.com/challenge/c23dFfNiKbnguSQtq

function findNemo(sentence) {
	const words = sentence.split(" ")
	if (words.includes("Nemo")) {
		return "I found Nemo at " + parseInt(words.indexOf("Nemo") + 1) + "!"
	} else {
		return "I can't find Nemo :("
	}
}



