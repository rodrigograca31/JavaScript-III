/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window
* 2. inside an object function. refers to the object itself
* 3. Instance of an object created by a constructor (new)
* 4. bind, call, apply
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// console.log(window);
// console.log(this == window);

// Principle 2

// code example for Implicit Binding

const person = {
	name: "Rodrigo",
	email: "email@host.com",
	contact: function () {
		return `${this.name} can be contacted at: ${this.email}`;
	}
}
console.log(person.contact());


// Principle 3

// code example for New Binding

const Person = function (params) {
	this.maxage = 99;
	this.name = params.name;
	this.sayHi = function () {
		return `${this.name} says hi`;
	}
}
const rodrigo = new Person({
	name: 'Rodrigo'
});
console.log(rodrigo.sayHi());


// Principle 4

// code example for Explicit Binding

function hobby(name) {
	return `${name} does: ${this.activity}`
}
const obj = {
	activity: "running"
}
console.log(hobby.call(obj, 'Rodrigo'));
