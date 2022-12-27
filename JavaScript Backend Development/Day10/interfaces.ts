class Animal {
  eat() {
    console.log("Chomp! chomp!");
  }
  sleep() {}
  procreate() {}
}

class Human extends Animal {
  //* Automatically inherits Animal features
}

//! Interface is CONTRACT, what we must achieve ourselves

interface Engineer {
  passBEExam(): void; // There is no implementation
}

interface Musician {
  playMusic(): void;
}

interface Developer {
  writeCode(): void;
}

class Sanjay extends Human implements Musician, Developer {
  playMusic(): void {
    console.log("Writing codee....");
  }
  writeCode(): void {
    console.log("Lalalaala lalalal");
  }
  // Sanjay is human by birth hence gets all features any human has
}

class Brendan extends Human implements Engineer, Developer {
  writeCode(): void {
    console.log("Created JS");
  }
  passBEExam(): void {
    console.log("Passed all exams");
  }
}

const devTeam: Developer[] = [
  new Sanjay(),
  /*new Human(), new Animal(),*/ new Brendan(),
];
const orchestra: Musician[] = [new Sanjay() /*new Brendan()*/];

devTeam.forEach((dev) => dev.writeCode());
orchestra.forEach((musician) => musician.playMusic());
