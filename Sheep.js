var Sheep = function()
{
	Animal.call(this, 50, 'Sheep');
};
Sheep.prototype = new Animal();
Sheep = Interface.implement(WalkBehaviour, Sheep, false);
Sheep.prototype.walk = function()
{
	console.log('Sheep is walking!');
	this.nEnergy -= 5;
	return this;
};