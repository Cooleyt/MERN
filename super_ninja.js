class Ninja{
    constructor(name){
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }
        sayName(){
            console.log("My ninja name is " + this.name + "!");
        }

        showStats(){
            if(this instanceof Sensei){
                console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength, "Wisdom: "+ this.wisdom);
                return
            }
            console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
        }

        drinkSake(){
            this.health += 10;
        }
}

class Sensei extends Ninja {
    constructor(name,) {
        super(name);
        this.wisdom = 10;
    }
    sayOtherName(){
        console.log("My sensei name is " + this.name + "!");
    }

    speakWisdom() {
        return this.drinkSake() + console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
} 

const Mike = new Ninja("Mike");
const Shawn = new Sensei("Shawn")
Mike.sayName();
Mike.drinkSake();
Mike.showStats();
Shawn.sayOtherName();
Shawn.speakWisdom();
Shawn.showStats();
