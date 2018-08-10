var readlineSync = require("readline-sync");

///////////////////
//   VARIABLES  ///
///////////////////

var player = {
    name: "",
    hp: 100,
    inventory: [],
    //generates and returns a damage amount
        // console.log("you attacked enemy")
    attack: function(){
        
        return Math.floor(Math.random() * 40 * 1)
    },
    print: function (){
        console.log(`name: ${player.name}, HP: ${player.hp}, inventory: ${player.inventory}`)
    },
    weapons: [],
    money: []
}
var gameLoopOptions = ['walk', 'check weapons', 'check cash']
var fightOptions = ['fight', 'flee']

var weapons = ['gun', 'knife']
var items = ['bullet proof vest', 'first aid kit']


//////////////////////
//   CONSTRUCTORS  ///
/////////////////////

function Enemy (type, health, item ){
    this.type = type;
    this.hp = health;
    this.item = item;
    this.attack = function(){
        return Math.floor(Math.random() * 40 * 1)
       
    }
    
  // generate and reaturn a random attack power (number)
    
}



///////////////////
//   FUNCTIONS  ///
///////////////////

function walk(){
    // create a random chance either 1/3 or 1/4
    var battleChance = Math.floor(Math.random() * 3)
    // if it's 1
    if(battleChance === 0){
        //fight
        fight()
    } else if(battleChance === 1 || battleChance === 2){
        // if it's 0 or 2
        //keep on walking
        console.log("you just walked for a little bit...")
    }   
}

function fight(){
    var enemy = generateRandomEnemy()

    while(player.hp > 0 && enemy.hp > 0){

        // give user option to attack or run
        var fightChoice = readlineSync.keyInSelect(fightOptions, "Do you want to Attack or Run? ")
        //if attack
        if(fightChoice === 0){
            // player needs to damage enemy
            var pAttack = player.attack()
                enemy.hp -= pAttack
                
            // enemy needs to damage player   
            var eAttack = enemy.attack() 
                player.hp -= enemy.attack()
                
            /// consle.og how much player was hurt, and how much enemy was hurt
                console.log(`${player.name} was hurt ${eAttack} hp`)
                console.log(`${enemy.type} was hurt ${pAttack} hp`)
                if (enemy.hp <= 0){
                    console.log(`${enemy.type} is dead`)
                    console.log(`${player.name} hp = ${player.hp}`)
                    console.log(`player recieved ${enemy.item}`)
                    player.inventory.push(enemy.item)
                }

        } else if (fightChoice === 1){
            // random attack power
            // 1/2 chance of escaping
            // flee ()

            var fleeChance = Math.floor(Math.random() * 2)
                if(fleeChance === 0){
                    var eAttack = enemy.attack() 
                    player.hp -= enemy.attack()
                    console.log(`${enemy.type} attacked you and you couldn't escape`)
                    console.log(`${player.name} was hurt ${eAttack} hp`) 
                    
                
                } else if(fleeChance === 1){
                    
                    console.log("you fled")
                    break;
        }   

        }

    } 

    
}

function generateRandomEnemy(){
    var enemyChance = Math.floor(Math.random() * 3)
    var currentEnemy
    if (enemyChance === 0){
        currentEnemy = new Enemy("Zombie", 50)
        console.log('here comes a zombie')
    } else if (enemyChance === 1){
        currentEnemy = new Enemy("Ogre", 50)
        console.log('here comes a ogre')
    } else if (enemyChance === 2){
        currentEnemy = new Enemy("Mobster", 50)
        console.log('here comes a mobster')
    }
    return currentEnemy
}

///////////////////
//   GAME LOOP   //
///////////////////

player.name = readlineSync.question("WHAT IS YOUR NAME ADVENTURER?");
console.log("GREETINGS " + player.name + " WE NEED YOUR HELP!");


while(player.hp > 0){
    var userChoice = readlineSync.keyInSelect(gameLoopOptions, "What would you like to do? ")
    if(userChoice === 0){
        walk()
        //if the player won the battle
    } else if(userChoice === 1){
        // print() - user status
        
    } else if(userChoice === -1){
        console.log("One cannot simply cancel...")
    }
}

while(player.hp <= 0){
    console.log('you dead')
    break;
}



// GAME OVER //
console.log('yay you won/game over')
