//! Functional style
//* map() function is acting more like a transforming function. It could have been named as transform()

const array = [1, 5, 3, 8, 4, 9];

console.log(array.map((element) => element * 2));

const languages = ['C', 'C++', 'Python', 'Java', 'JavaScript', 'Dart']
console.log(languages.map(lang => lang.toUpperCase()));
console.log(languages);

console.log(languages.map(lang => {return {name: lang, length: lang.length}}));
console.log(languages.map(lang => ({ name: lang, length: lang.length })));
console.log(languages.map(lang => ({[lang]: lang.length}))) // [lang] this way we make lang identifier a variable, this allows us to use the parameters instead of static identifier name


//! Example for using [] as identifier parameterization
var id = 'COID';
// Compare the objects below and understand what [id] does
var person1 = {[id]: 1, name: 'Brendan'}
var person2 = {id: 1, name: 'Brendan'}
console.log(person1, person2); 

// map() creates an array, so it takes up more memory
