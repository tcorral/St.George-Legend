var Knight = function(sName)
{
	Person.call(this, 600, 'Knight');
	this.sName = sName || 'John Doe';
};
Knight.prototype = new Person();
Knight = Interface.implement(RideBehaviour, Knight);
Knight.prototype.ride = function()
{
	console.log(sName + ' knight is riding his horse!');
	this.nEnergy -= 5;
	return this;
};
Knight.prototype.attackUsingSpear = function(oDragon)
{
	console.log(sName + ' knight is attacking Dragon with the spear!');
	oDragon.beInjured(oDragon.nEnergy - 5);
};
