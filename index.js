let definedName1 = prompt('enter your name player 1:')
let randomName1 = ['zoe','anna','abi','xanthe','georgia'];
// computer picking random name from list if no name is entered
let pickedRandomName1 = randomName1[Math.floor(Math.random() * 4 + 0)];
if  (definedName1 == ''){
  console.log('welcome ' + pickedRandomName1 + ' to the number guessing game')
}else{
  console.log('welcome' + definedName1 + ' to the number guessing game')
}

let definedName2 = prompt('enter your name player 2:')
let randomName2 = ['zoe','anna','abi','xanthe','georgia'];
let pickedRandomName2 = randomName2[Math.floor(Math.random() * 4 + 0)];
if  (definedName2 == ''){
  console.log('welcome ' + pickedRandomName2 + ' to the number guessing game')
}else{
  console.log('welcome' + definedName2 + ' to the number guessing game')
}




// reset round, and point variables
let round = 1;
let pointPlayer1 = 0;
let pointPlayer2 = 0;
play();
function play() {
// computer picking random number for player to guess
 random = Math.floor(Math.random() * 20 + 1);
// the game that repeats
 do{
		guessPlayer1 = prompt(definedName1 || pickedRandomName1 + ' enter a number from 1-20:')
		if (guessPlayer1 > random) {
			console.log('enter a smaller number');
		} else if (guessPlayer1 < random) {
			console.log('enter a bigger number');
		} else {
			console.log('You got it correct');
		pointPlayer1 ++
	  console.log('Your points are now ' + pointPlayer1);
		break;
		}
    round ++

	  guessPlayer2 = prompt(definedName2 || pickedRandomName2 + ' enter a number from 1-20:');
		if (guessPlayer2 > random) {
			console.log('enter a smaller number');
		} else if (guessPlayer2 < random) {
			console.log('enter a bigger number');
		} else {
			console.log('You got it correct');
      pointPlayer2 ++
		  console.log('Your points are now ' + pointPlayer2);
		break;
		}
    round++

    } while (round < 5) 
    // {
    // play();
    // } if(round >= 4){
    // console.log('you finished')
  }
  // after a player gets it right or runs out of guesses it says round over
  console.log('round over');
  // ask if want to play again and if yes it will repeat the game and if no it wil stop the game and show the point for the players
  again = prompt('do you want to play again?');
  if (again == 'y') {
    play();
  } else {
    console.log('player 1 your final points are' + pointPlayer1)
    console.log('player 2 your final points are' + pointPlayer2)
    console.log('game over')
  }
