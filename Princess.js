var Princess = function(sName)
{
	Person.call(this, sName, 200);
	this.sType = 'Princess';
};
Princess.prototype = new Person();