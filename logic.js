// This array will hold the options for the game
// Fill in your options below
const options = ['rock', 'paper', 'scissors'];

// This function takes in the userChoice and then prints the results to the console.
function playGame(userChoice) {
    // First remind the user of his/her choice
    console.log('You chose ' + userChoice + '.');

    // Now choose a random number between 0 and 2
    const rand = Math.floor(Math.random() * 3);

    // Then use this random number to give the computer a choice
    const compChoice = options[rand];

    // Now log the computer's choice to the console.
    console.log('The computer chose ' + compChoice + '.');

    if (compChoice == userChoice) {
        console.log('You tied.');
    } else if (compChoice == 'rock') {
        if (userChoice == 'paper') {
            console.log('You win. paper beats rock.');
        } else {
            console.log('You lose. rock beats scissors');
        }
    } else if (compChoice == 'paper') {
        if (userChoice == 'scissors') {
            console.log('You win. scissors beats paper.');
        } else {
            console.log('You lose. paper beats rock.');
        }
    } else if (userChoice == 'rock') {
        console.log('You win. rock beats scissors.');
    } else {
        console.log('You lose. scissors beats paper.');
    }
}

module.exports.playGame = playGame;
module.exports.options = options;
