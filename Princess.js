var Princess = function(sName)
{
	Person.call(this);
};
Princess.prototype = new Person();
Princess = Interface.implement(WalkBehaviour, Person);
Princess.prototype.walk = function()
{
	this.nEnergy -= 8;
	return this;
};