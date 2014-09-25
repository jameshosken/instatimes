//Contructor Function:

function Person(n, a, s){
	console.log("A new person has arrived!");

	this.name = n;
	this.age = a;
	this.strength = s;

}

var me = new Person("James", 20, 400);

var craig = new Person("Craig", 35, 400);

$.each(me, function(i){
	console.log(i);
});