// console.log("js works");

class Tamagotchi{
	//things the tomagotchi can do are methods of the tomagotchi
	constructor (name, age, ){
		this.name = (this.getAName.input); 
		this.hunger = 0;
		this.sleepy = 0;
		this.boredom = 0;
		this.age = 0;
		getAName = function() {
			prompt("WHAT! WHERE AM I?! WHO AM I?! GIVE ME A NAME!");

		};
		
		announceItself = function(){
			alert("Hello! I'm your tomagotchi " + (this.name))
		};
	};
		// bounceAround(){

		// };
		// eatSomething(){

		// };
		// goToSleep(){

		// };
		// die(){

		// };
	// },
}



////////////////////////////////////////////////////////////////////////////////////////////////////
// below this line is the game object, describes what events do when the user interacts with them

const game = {

	time: 0,

	setTimer(){
    	const $timer = $('#timer');
    	const interval = setInterval(() =>{

        	if(this.time === 0){

          		clearInterval(interval); // stops the interval
          		this.round++
        	} else {
          		this.time--
        	}

        // update the time on the dom
        $timer.text(`timer: ${this.time}s`)

    }, 1000) },


}
// 	time
// 	//properties outside of the tomagotchi, like timer
// // Add the ability to name your pet.

// ////DO NOT HAVE MORE THAN ONE INTERVAL////

// 	//objects to feed the tomagotchi
// 	//
// // Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.

// // Increase your pet's age every x minutes
// // Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// // You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// // Morph your pet at certain ages.
// // Animate your pet across the screen while it's alive.

////////////////////////////////////////////////////////////////////////////////////////////////////
////listeners can go in global scope but don't necessarily need to be
		// no logic down here
		// all that exists here are the events that call the methods from the tomagotchi and game objects



















