var Person = function(sName)
{
	Animal.call(this, 100);
	this.sName = sName || 'Jhon Doe';
	this.aPossessions = [];
};
Person.prototype = new Animal();
Person = Interface.implement(WalkBehaviour, Person);
Person.prototype.walk = function()
{
	this.nEnergy -= 5;
	return this;
};
Person.prototype.give = function(oAnimal, oThing)
{

};