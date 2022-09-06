import readlineSync from 'readline-sync';

const greeting = () => {
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name?: ');
	console.log(`Hello, ${name}!`);
	console.log('Answer "yes" if the number is even, otherwise answer "no".');

	const getRandomNumber = (min = 0, max = 100) => {
		    const random = min - 0.5 + Math.random() * (max - min + 1);
		    return Math.round(random);
	};

	for (let i = 0; i < 3; i = i + 1) {
	const theNumber = getRandomNumber();
	console.log (`Question: ${theNumber}`);
	const answerUser = readlineSync.question('Your answer: ');
	const checkTheEvenNumber = (theNumber % 2 === 0) && (answerUser === 'yes');
	const checktheOddNumber = (theNumber % 2 !== 0) && (answerUser === 'no');
	
	if (checkTheEvenNumber === true || checktheOddNumber === true) {
	console.log('Correct!');
	} else { const correctAnswer = (answerUser === 'yes' ? 'no' : 'yes');
	console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
	console.log(`Let's try again, ${name}!`);
	return;
		 }
	};
console.log(`Congratulations, ${name}!`);	

};

export default greeting;
