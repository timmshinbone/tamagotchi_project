////////////////////////TAMAGOTCHI PROJECT////////////////////////////////

class Tamagotchi{
	//things the tomagotchi can do are methods of the tomagotchi
	constructor (name){
		this.name = name; 
		this.age = 0;
		this.sleepy = 0;
		this.hunger = 0;
		this.boredom = 0;
		// getAName = function() {
		// 	//tamaSpeechBubble - "Who am I? What is my name!"
		// 	//make input box show up in header
		// };
		this.sleepyEyes = "= =";
		this.sleepyMouth = "/";

		this.boredEyes = "¬ ¬";
		this.boredMouth = "/";

		this.hungryEyes = "• •";
		this.hungryMouth = "(";

		this.deadEyes = "X x";
		this.deadMouth = "|"
	// 	announceHunger = function(){
	// 		//at hunger <= 5 tamaSpeechBubble - "I'm hungry, can I have a burger?"
	// 	};
	// };
		// bounceAround(){

		// };
		// this.goLeft = function(){
		// 	$("#tamagotchi").animate({"left": "-50px"}, 1000);
		// 	setTimeout(this.goLeft, 1000);
		// };

		// this.goRight = function(){
		// 	$("#tamagotchi").animate({"right": "50px"}, 1000, this.goLeft);
		// 	setTimeout(this.goRight, 1000);
		// };
		// eatSomething(){

		// };
	}
}



////////////////////////////////////////////////////////////////////////////////////////////////////
// below this line is the game object, describes what events do when the user interacts with them

const game = {
	//default starting state of the game, empty "tank", asks for new tamagotchi
	blankTank(){
		$("#tamagotchi").hide();
		$("form.nameTama").hide();
		$("#food").hide();
		$("#heDed").hide();
	},

	// time: 0,
	time: 0,
	pet: null,



	startGame(){
		//instantiate new Tamagotchi, make tamagotchi show up
		this.makeNewTamagotchi();
		this.startTheClock();

	},
//instantiates new Tamagotchi, make tamagotchi show up, name form shows up
	makeNewTamagotchi(name){
		const $tamagotchi = $("#tamagotchi");
		$tamagotchi.show("slow",);
		$("form.nameTama").show();
		this.pet = new Tamagotchi(name);
		// this.pet.getSleepy();
		// this.pet.goLeft();
	},

	startTheClock(){

		const interval = setInterval(() => {
			//count seconds moving up
			this.time += 1;
			// console.log(this.time);
			if(this.pet.sleepy >= 10 || this.pet.hunger >= 10 || this.pet.boredom >= 10){
				clearInterval(interval)
				// this.tamaDies();
			}

			if(this.time % 8 === 0){
				this.pet.sleepy += 1
				
			} 
			if(this.time % 7 === 0){
				this.pet.age += 1
				
			} 
			if(this.time % 4 === 0){
				this.pet.hunger += 1
			}
			if(this.time % 6 === 0){
				this.pet.boredom += 1
			}

			this.printInfo()

			this.faceChanges();
			// this.getBored()
			// this.getSleepy() // adj eyes if nec
			// this.getHungry()
			//clear interval on death of tamagotchi
		}, 1000);
	},

	printInfo() {
		let $sleepy = $("#sleepy");
		let $age = $("#age");
		let $hunger = $("#hunger");
		let $boredom = $("#boredom");		
		$sleepy.text("Sleepy: " + this.pet.sleepy);
		$age.text("Age: " + this.pet.age);
		$hunger.text("Hunger: " + this.pet.hunger);
		$boredom.text("Boredom: " + this.pet.boredom);		
	},

	lightsOut() {
		const $lights = $("#tamagotchiTank");
		const $sleepyTama = $("#tamagotchi");
		let $sleepy = $("#sleepy")
		//on click turn lights off
		$lights.css("background", "rgba(0,0,0,.6)");
		$sleepyTama.fadeOut("slow");
		//set sleepy to 0
		this.pet.sleepy = 0;
		this.printInfo()
		//clear time interval
		clearInterval(this.interval);
	},

		//on click turn lights back on
	lightsOn(){
		const $lights = $("#tamagotchiTank");
		const $wakeUpTama = $("#tamagotchi");
		let $sleepy = $("#sleepy")

		$lights.css("background", "rgba(0,0,0,0)");
		$wakeUpTama.fadeIn("slow");
		this.printInfo()
		//restart timers
	},

	feedTama(){
		const $food = $("#food");
		const $hunger = $("#hunger");

		$food.fadeIn("slow");
		this.pet.hunger = 0;
		this.printInfo()
		
		setTimeout(() => {
			// console.log("it's been 2s");
			$food.fadeOut("slow");
		}, 1000)
		// if(this.time % 2 === 0){
		// 	console.log("SHOULD FADE");
		// }
	},
	
	playWithTama(){
		const $eyes = $("#eyes");
		const $boredom = $("#boredom");

		$eyes.fadeOut("slow");
		$eyes.fadeIn("slow");

		this.pet.boredom = 0;
		this.printInfo()
	},

	faceChanges(){
		const $eyes = $("#eyes");
		const $mouth = $("#mouth");
		const $heDed = $("#heDed");
		if(this.pet.sleepy < 6 && this.pet.boredom < 6 && this.pet.hunger < 6) {
			$eyes.text("o o");
			$mouth.text(")");
		}
		if(this.pet.sleepy >= 6){
			$eyes.text(this.pet.sleepyEyes);
			$mouth.text(this.pet.sleepyMouth);
		}
		if(this.pet.hunger >= 6){
			$eyes.text(this.pet.hungryEyes);
			$mouth.text(this.pet.hungryMouth);
		}
		if(this.pet.boredom >= 6){
			$eyes.text(this.pet.boredEyes);
			$mouth.text(this.pet.boredMouth);
		}
		if(this.pet.sleepy >= 10 || this.pet.hunger >= 10 || this.pet.boredom >= 10){
			// $eyes.text(this.pet.deadEyes)
			// $mouth.text(this.pet.deadMouth)
			// $("#heDed").show();
			this.tamaDies();
		}
	},

	// getSleepy(){
	// 	const $eyes = $("#eyes");
	// 	const $mouth = $("#mouth");
	// 	if(this.pet.sleepy >= 6){
	// 		$eyes.text("= =");
	// 		$mouth.text("/");
	// 		// $eyes.css("transform", "rotate(90deg)")
	// 	} else if(this.pet.sleepy < 6){
	// 		$eyes.text("o o");
	// 		// $eyes.css("font-size", "30px")
	// 		$mouth.text(")");
	// 	}
	// },

	// getBored(){
	// 	const $eyes = $("#eyes");
	// 	const $mouth = $("#mouth");
	// 	if(this.pet.boredom >= 6){
	// 		$eyes.text("¬ ¬");
	// 		$mouth.text("/");
	// 	} else if(this.pet.boredom < 6){
	// 		$eyes.text("o o");
	// 		// $eyes.css("font-size", "30px")
	// 		$mouth.text(")");
	// 	}
	// },

	// getHungry(){
	// 	const $eyes = $("#eyes")
	// 	const $mouth = $("#mouth");
	// 	if(game.pet.hunger >= 6){
	// 		$eyes.text("• •");
	// 		$mouth.text("(");
	// 	} else if(game.pet.hunger < 6);
	// 		$eyes.text("o o");
	// 		$mouth.text(")");
	// },
	// ageTama(){
	// 	const $oldTama = $("#tamagotchi");
	// 	if(this.pet.age > 7){
	// 		$oldTama.css({})
	// 	}
	// },

	tamaDies(){
		$("#eyes").text("x x");
		$("#mouth").text("|");
		$("#heDed").text("OH NO! " + (game.pet.name) + " IS DED!").show();	 
	}
}
// game.startGame();

game.blankTank();



////////////////////////////////////////////////////////////////////////////////////////////////////
////listeners can go in global scope but don't necessarily need to be/////
		// no logic down here
		// all that exists here are the events that call the methods from the 
		//	tomagotchi and game objects

$("#begin").on("click", () => {
	game.startGame();
	// $("div.tamagotchi").show("slow",);
	// $("form.nameTama").show();
});
//give tama a name
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
//operates the lightsout button
$("#sleep").on("click", () => {
	game.lightsOut();
});
//operates the lights on function
$("#wakeUp").on("click", () => {
	game.lightsOn();
});
// opertes the feed button
$("#feed").on("click", () => {
	game.feedTama();
})
// operates play button
$("#play").on("click", () => {
	game.playWithTama();
})
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




















