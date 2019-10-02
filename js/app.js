////////////////////////TAMAGOTCHI PROJECT////////////////////////////////

class Tamagotchi{
	//things the tomagotchi can do are methods of the tomagotchi
	constructor (name){
		this.name = name; 
		this.hunger = 0;
		this.sleepy = 0;
		this.boredom = 0;
		this.age = 0;
		// getAName = function() {
		// 	//tamaSpeechBubble - "Who am I? What is my name!"
		// 	//make input box show up in header
		// };
		
	// 	announceHunger = function(){
	// 		//at hunger <= 5 tamaSpeechBubble - "I'm hungry, can I have a burger?"
	// 	};
	// };
		// bounceAround(){

		// };
		// eatSomething(){

		// };
		// goToSleep(){

		// };
		// die(){

		// };
	}
}



////////////////////////////////////////////////////////////////////////////////////////////////////
// below this line is the game object, describes what events do when the user interacts with them

const game = {
	//default starting state of the game, empty "tank", asks for new tamagotchi
	blankTank(){
		$("div.tamagotchi").hide();
		$("form.nameTama").hide();
	},

	time: 0,
	pet: null,



	startGame(){
		//instantiate new Tamagotchi, make tamagotchi show up
		this.makeNewTamagotchi();
		// this.pet = new Tamagotchi("$("#nameTamaInput").val()")
		//have tamagotchi ask its name
	},
//instantiates new Tamagotchi, make tamagotchi show up, name form shows up
	makeNewTamagotchi(name){
		$("div.tamagotchi").show("slow",);
		$("form.nameTama").show();
		this.pet = new Tamagotchi(name);
	},


}
// game.startGame();

game.blankTank();

////////////////////////////////////////////////////////////////////////////////////////////////////
// below this line are the event handlers, these tell the game what to do based on user input

$("#begin").on("click", () => {
	game.startGame();
	// $("div.tamagotchi").show("slow",);
	// $("form.nameTama").show();
});

$("form").on("submit", (e) => {
	//prevent page refresh
	e.preventDefault();
	console.log("Your Tamagotchi is named " + ($('#nameTamaInput').val()) + "!");
	const tamaName = $("#nameTamaInput").val()
	const $title = $("h3.title");
	// const $tamaName = $(Tamagotchi.name);
	$title.text($("#nameTamaInput").val());
	$("form.nameTama").hide("slow");
	game.makeNewTamagotchi(tamaName);
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



















