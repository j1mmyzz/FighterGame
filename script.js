const playerAttackButton = document.querySelector(".player-attack-button");
const playerDefendButton = document.querySelector(".player-defend-button");

// Define initial stats
let alterStrength;
let alterCunning;
let alterSpeed;
let alterFatigue;

// Create player and computer objects with initial stats
const player = {
  strength: 6,
  cunning: 6,
  speed: 6,
  fatigue: 30,
  //get will dynamically change the value of attack if the other stats change
  get attack() {
    return Math.round(
      (this.strength + this.speed + this.cunning) / getRandomInt(1, 3)
    );
  },
  defending: true,
  get defense() {
    return this.defending
      ? this.speed + this.cunning
      : this.speed + getRandomInt(1, 6);
  },
};

const computer = {
  strength: 6,
  cunning: 6,
  speed: 6,
  fatigue: 30,
  get attack() {
    return Math.round(
      (this.strength + this.speed + this.cunning) / getRandomInt(1, 3)
    );
  },
  defending: true,
  get defense() {
    return this.defending
      ? this.speed + this.cunning
      : this.speed + getRandomInt(1, 6);
  },
};

// Function to get a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//shuffles an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let stats1 = ["strength", "cunning", "speed", "fatigue"];
let stats2 = ["strength", "cunning", "speed", "fatigue"];

//increase first 2 and decrease last 2
shuffleArray(stats1);
shuffleArray(stats2);

if (stats1[0] === "strength") {
  player.strength += getRandomInt(0, 1);
} else if (stats1[0] === "cunning") {
  player.cunning += getRandomInt(0, 1);
} else if (stats1[0] === "speed") {
  player.speed += getRandomInt(0, 1);
} else {
  player.fatigue += getRandomInt(0, 6);
}

if (stats1[1] === "strength") {
  player.strength += getRandomInt(0, 1);
} else if (stats1[1] === "cunning") {
  player.cunning += getRandomInt(0, 1);
} else if (stats1[1] === "speed") {
  player.speed += getRandomInt(0, 1);
} else {
  player.fatigue += getRandomInt(0, 6);
}

if (stats1[2] === "strength") {
  player.strength -= getRandomInt(0, 1);
} else if (stats1[2] === "cunning") {
  player.cunning -= getRandomInt(0, 1);
} else if (stats1[2] === "speed") {
  player.speed -= getRandomInt(0, 1);
} else {
  player.fatigue -= getRandomInt(0, 6);
}

if (stats1[3] === "strength") {
  player.strength -= getRandomInt(0, 1);
} else if (stats1[3] === "cunning") {
  player.cunning -= getRandomInt(0, 1);
} else if (stats1[3] === "speed") {
  player.speed -= getRandomInt(0, 1);
} else {
  player.fatigue -= getRandomInt(0, 6);
}

if (stats2[0] === "strength") {
  computer.strength += getRandomInt(0, 1);
} else if (stats2[0] === "cunning") {
  computer.cunning += getRandomInt(0, 1);
} else if (stats2[0] === "speed") {
  computer.speed += getRandomInt(0, 1);
} else {
  computer.fatigue += getRandomInt(0, 6);
}

if (stats2[1] === "strength") {
  computer.strength += getRandomInt(0, 1);
} else if (stats2[1] === "cunning") {
  computer.cunning += getRandomInt(0, 1);
} else if (stats2[1] === "speed") {
  computer.speed += getRandomInt(0, 1);
} else {
  computer.fatigue += getRandomInt(0, 6);
}

if (stats2[2] === "strength") {
  computer.strength -= getRandomInt(0, 1);
} else if (stats2[2] === "cunning") {
  computer.cunning -= getRandomInt(0, 1);
} else if (stats2[2] === "speed") {
  computer.speed -= getRandomInt(0, 1);
} else {
  computer.fatigue -= getRandomInt(0, 6);
}

if (stats2[3] === "strength") {
  computer.strength -= getRandomInt(0, 1);
} else if (stats2[3] === "cunning") {
  computer.cunning -= getRandomInt(0, 1);
} else if (stats2[3] === "speed") {
  computer.speed -= getRandomInt(0, 1);
} else {
  computer.fatigue -= getRandomInt(0, 6);
}

//check to see if they change by (0,1) or (0,6)...they do
console.log(player);
console.log(computer);

//if attack value is > than the defense value the opponent's fatigue is reduced by the difference
if (player.attack > computer.defense) {
  computer.fatigue -= player.attack - computer.defense;
}
if (computer.attack > player.defense) {
  player.fatigue -= computer.attack - player.defense;
}

const playerDiv = document.querySelector(".player-stats");
const computerDiv = document.querySelector(".computer-stats");

function updateStats(){
  playerDiv.innerHTML = `Player = Strength: ${player.strength} Cunning: ${player.cunning} Speed: ${player.speed} Fatigue: ${player.fatigue} Attack: ${player.attack} Defending: ${player.defending} Defense: ${player.defense}`;
  computerDiv.innerHTML = `Computer = Strength: ${computer.strength} Cunning: ${computer.cunning} Speed: ${computer.speed} Fatigue: ${computer.fatigue} Attack: ${computer.attack} Defending: ${computer.defending} Defense: ${computer.defense}`;
  if(player.fatigue<=0){
    //computer won
    playerDiv.innerHTML = "YOU LOST!"
    computerDiv.innerHTML = "YOU WON!"
    document.querySelector(".player-attack-button").disabled = true;
    document.querySelector(".player-defend-button").disabled = true;

  }
  if(computer.fatigue<=0){
    //player won
    computerDiv.innerHTML = "YOU LOST!"
    playerDiv.innerHTML = "YOU WON!"
    document.querySelector(".player-attack-button").disabled = true;
    document.querySelector(".player-defend-button").disabled = true;

  }
}

updateStats();

const INITIAL_COMPUTER_FATIGUE = computer.fatigue;
const INITIAL_PLAYER_FATIGUE = player.fatigue;
console.log(INITIAL_COMPUTER_FATIGUE);
console.log(INITIAL_PLAYER_FATIGUE);
function computerChoice() {
  //if 0 then computer is defending (computer.defending = true), 1 then computer is attacking (computer.defending = false)
  let compChoice = getRandomInt(0, 1);
  compChoice === 0 ? (computer.defending = true) : (computer.defending = false);

}

//fatigue may never go above initial fatigue 
playerAttackButton.addEventListener("click", () => {
  player.defending = false;
  computerChoice();
  if(!computer.defending){
    //if player attacks and computer not defending (attacking)
      computer.fatigue -= player.attack;
      player.fatigue -= computer.attack;
  } else{
    //if computer defends and player attacks 
    let computerDamage = player.attack - computer.defense;
    if (computerDamage > 0) {
        computer.fatigue -= computerDamage;
    } else{
      if(computer.fatigue += getRandomInt(1,6) <= INITIAL_COMPUTER_FATIGUE){
        computer.fatigue += getRandomInt(1,6)
      }
    }
  }
  updateStats();
});

playerDefendButton.addEventListener("click", () => {
  player.defending = true;
  computerChoice();
  if(!computer.defending){
    // if computer attacks
    let playerDamage = computer.attack - player.defense;
    if(playerDamage > 0){
        player.fatigue -= playerDamage;
    }else{
      if(player.fatigue += getRandomInt(0,6) <= INITIAL_PLAYER_FATIGUE){
        player.fatigue += getRandomInt(0,6);
      }
    }
  } else{
    //if both player and computer defend, both get some fatigue points back
   if(player.fatigue += getRandomInt(1,6) <= INITIAL_PLAYER_FATIGUE){
    player.fatigue += getRandomInt(1,6);
   }
   if(computer.fatigue += getRandomInt(1,6) <= INITIAL_COMPUTER_FATIGUE){
    computer.fatigue += getRandomInt(1,6);
   }
  }
  updateStats();
});
//there is an issue when clicking defend, the fatigue can go above the initial fatigue for both player and computer