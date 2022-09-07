let tesButtonElement = document.getElementById('test-number');
let resultsMsgEle = document.getElementById('result');
let matchedMsgEle = document.getElementById('match-msj');
let noMatchMsgEle = document.getElementById('no-match-msj');
let numberToGuessEle = document.getElementById('number-to-guess');
let guessInputEle = document.getElementById('number-guessed');


tesButtonElement.addEventListener('click',testMatch);

function testMatch(e) {
	
	matchedMsgEle.style.display = 'none';
	noMatchMsgEle.style.display = 'none';
	resultsMsgEle.style.display = 'none';

	let numberGuessed = parseInt(guessInputEle.value);

	if(!isNaN(numberGuessed) &&numberGuessed> 0 &&numberGuessed<= 10){
		resultsMsgEle.style.display = 'block';
		let numberRandom = Math.floor(Math.random()*10 + 1);

		if (numberRandom == numberGuessed) {
			console.log("MATCHED");
			matchedMsgEle.style.display = 'inline';
		}
		else{
			console.log("NO MATCHED");
			noMatchMsgEle.style.display = 'inline';
		}
		console.log(numberGuessed, " :numberGuessed");
		console.log(numberRandom, " :numberRandom");
		numberToGuessEle.innerText = numberRandom;

	}

}