class Card {
	constructor(name, cost) {
		this.name = name;
		this.cost = cost;
	}
	showStats() {
		console.log(`Name: ${this.name}`);
		console.log(`Cost: ${this.cost}`);
	}
}

class Unit extends Card {
	constructor(name, cost, power, res) {
		super(name, cost);
		this.power = power;
		this.res = res;
	}

	attack(target) {
		console.log(`${this.name} attacks ${target.name} dealing ${this.power} damage`);
		target.res -= this.power;
	}
	showStats() {
		console.log(`Power: ${this.power}`);
		console.log(`Resilience: ${this.res}`);
	}
}

class Effect extends Card {
	constructor(name, cost, magnitude, attr) {
		super(name, cost);
		this.attr = attr;
		this.magnitude = magnitude;
	}

	play(target) {
		target[this.attr] += this.magnitude;
		console.log(`${this.name}: ${this.magnitude > 0 ? "Raise" : "Lower"} ${target.name}'s ${this.attr} by ${this.magnitude}`);
	}
}

let unit1 = new Unit("Lebron James", 5, 15, 20);
let unit2 = new Unit("Paul George", 2, 7, 10);
let effect1 = new Effect("Plot Armor", 10, 20, "res");
let effect2 = new Effect("Fusion Dance", 5, 5, "power");
let effect3 = new Effect("Resilience Up", 10, 15, "res");
unit1.showStats();
console.log("*********");
effect1.play(unit1);
unit1.showStats();
console.log("*********");
effect2.play(unit1);
unit1.showStats();
console.log("*********");
effect3.play(unit1);
unit1.showStats();
console.log("*********");
unit1.attack(unit2);
unit2.showStats();
console.log("*********");
