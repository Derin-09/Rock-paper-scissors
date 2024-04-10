let score= JSON.parse(localStorage.getItem('score'))|| {
    wins: 0,
    losses: 0,
    ties: 0
  };

  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
      playGame('rock')
    }
    else if (event.key === 'p') {
      playGame('paper')
    }
    else if (event.key === 's') {
      playGame('scissors')
    }
  })
  
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
let isAutoPlaying = false;
let intervalID;
  function autoplay() {

    if(!isAutoPlaying) {
      intervalID = setInterval(function() {
        const playerMove = pickComputerMove();
            playGame(playerMove);
          }, 1000);
    isAutoPlaying = true;}
    else {
      clearInterval(intervalID);
      isAutoPlaying = false;
    }
  }
  
function playGame (playerMove) {
  computerMove= pickComputerMove();

  let result = '';

  if (playerMove=== 'scissors') {
      if  (computerMove=== 'Rock') {
      result = 'You lose.'
  }
  else if  (computerMove=== 'Paper') {
      result = 'You win.'
  }
  else if  (computerMove=== 'Scissors') {
      result = 'Tie.'
  } 
  } else if (playerMove==='paper') {
      if  (computerMove=== 'Rock') {
      result = 'You win.'
  }
  else if  (computerMove=== 'Paper') {
      result = 'Tie.'
  }
  else if  (computerMove=== 'Scissors') {
      result = 'You lose.'
  } 
  }
  else if (playerMove==='rock') {
      if  (computerMove=== 'Rock') {
      result = 'Tie.'
  }
  else if  (computerMove=== 'Paper') {
      result = 'You lose.'
  }
  else if  (computerMove=== 'Scissors') {
      result = 'You win.'
  } 
  }
if (result === 'You win.') {
  score.wins = score.wins + 1;
}
else if (result === 'You lose.') {
  score.losses = score.losses + 1;
}
else if (result === 'Tie.') {
  score.ties = score.ties + 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You <img src= "images/${playerMove}-emoji.png" class="move-icon"> Computer <img src= "images/${computerMove}-emoji.png" class="move-icon">`

 
} 
function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}` 
}
  function pickComputerMove() {
    const randomNumber= Math.random()
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove= 'Rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove= 'Paper';
  }
  else if (randomNumber >= 2/3 && randomNumber < 1 ) {
    computerMove= 'Scissors';
  }
  return computerMove
  }