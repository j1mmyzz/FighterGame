//initial stats
let alterStrength;
let alterCunning;
let alterSpeed;
let alterFatigue;

const player = {
    strength: 6 + alterStrength,
    cunning: 6 + alterCunning,
    speed: 6 + alterSpeed,
    fatigue: 30 + alterFatigue,
}

const computer = {
    strength: 6 + alterStrength,
    cunning: 6 + alterCunning,
    speed: 6 + alterSpeed,
    fatigue: 30 + alterFatigue,
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}
//choose which stat to alter
let alter1 = getRandomInt(1,4);
let alter2 = getRandomInt(1,4);

//make sure it alters 2 different stats
while(alter1===alter2){
    alter2 = getRandomInt(1,4);
}
console.log(alter1);
console.log(alter2);

//1 is strength 2 is cunning 3 is speed 4 is fatigue 
if(alter1==1){
    alterStrngth = getRandomInt(-1,1);
}else if(alter1==2){
    alterCunning = getRandomInt(-1,1);
}else if(alter1==3){
    alterSpeed = getRandomInt(-1,1);
}else{
    alterFatigue = getRandomInt(-6,6); //because the project saids 6
}
