class Ninja {
	constructor(name, health) {
		this.name = name;
		this.health = health;
		this.speed = 3;
		this.strength = 3;
	}
	sayName() {
		console.log(`${this.name}`);
	}
	showStats() {
		console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
	}
	drinkSake() {
		this.health += 10;
	}
}

class Sensei extends Ninja {
	constructor(name) {
		super(name);
		this.name = name;
		this.health = 200;
		this.strength = 10;
		this.speed = 10;
		this.wisdom = 10;
	}
	speakWisdom() {
		this.drinkSake();
		const wisdom = "What one programmer can do in one month, two programmers can do in two months.";
		console.log(wisdom);
	}
}

const ninja1 = new Ninja("Shawn", 1000);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const sensei1 = new Sensei("Super Shawn");
sensei1.speakWisdom();
sensei1.showStats();
