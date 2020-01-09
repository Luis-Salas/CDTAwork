function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.sayName = function(){
       console.log(this.name)
    }
	this.showStats = function(){
		console.log(this.name, this.health, speed, strength)
	}
	this.drinkSake = function(){
	this.health += 10
	console.log(this.health)
	}
    return this;
}
const ninja1 = new Ninja("Luis");

ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()