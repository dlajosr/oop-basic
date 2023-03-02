class Animal {
    species;

    constructor(species) {
        this.species = species;
    }

    move() {
        console.log("El animal empezo a moverse");
    }

}

class Dog extends Animal {
    constructor(){
        super("Canis");
    }
}

class Cat extends Animal {
    constructor() {
        super("Felis");
    }
}


function main() {

    const myDog = new Dog();
    const myCat = new Cat();

    console.log(myDog.species);
    console.log(myCat.species);
    myDog.move();
    myCat.move();
}

main();