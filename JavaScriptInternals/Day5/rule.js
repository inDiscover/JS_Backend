// Do not write op level functions, write lambda instead

class Person {
    //! Lambda inside the class will not go to prototype but every object.
    // print = () => console.log("Hello world")

    print() {
        console.log("Hello world");
    }
}