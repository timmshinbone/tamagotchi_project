////////////////////////TAMAGOTCHI PROJECT////////////////////////////////

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

	startGame(){

	},



}
// game.startGame();

////////////////////////////////////////////////////////////////////////////////////////////////////
// below this line are the event handlers, these tell the game what to do based on user input

$("form").on("submit", (e) => {
	//prevent page refresh
	e.preventDefault();
	// prompt("A new Tamagotchi has just hatched, what's its name?");
	// const $tamaName = $startButton.val();
	console.log("Your Tamagotchi is named " + ($('#nameTamaInput').val()) + "!");
});
// 	time
// 	//properties outside of the tomagotchi, like timer
// // Add the ability to name your pet.

// ////DO NOT HAVE MORE THAN ONE INTERVAL////

// 	//objects to feed the tamagotchi
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



















