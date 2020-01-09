class Ninja{
	constructor(name){
		this.name = name;
		this.speed = 3
		this.strength = 3
		this.health = 100
	}
	sayName(){
		console.log(this.name)
		return this
	}
	showStats(){
		console.log(this.speed, this.strength,this.health)
		return this
	}
	drinkSake() {
		this.health += 10;
		return this;
	}

}
class Sensei extends Ninja{
	constructor(name){
		super(name);
		this.speed = 10;
		this.strength = 10;
		this.wisdom = 10;
		this.health = 200;
	}
	speakWisdom(){
		super.drinkSake()
		console.log("important quote here")
		return this
	}
	showStats(){
		console.log(this.speed, this.strength,this.health, this.wisdom)
	}

}

const ninja = new Ninja("luis")
ninja.showStats().sayName().drinkSake()

const sensei = new Sensei("sensei dude")
sensei.speakWisdom().showStats()