var Person = function(sName, nEnergy)
{
	Animal.call(this, (nEnergy || 100), 'Person');
	this.sName = sName || 'John Doe';
	this.aPossessions = [];
	this.sType = 'Person';
};
Person.prototype = new Animal();
Person = Interface.implement(WalkBehaviour, Person, false);
Person.prototype.isPrincess = function()
{
	return this.sType === 'Princess';
};
Person.prototype.walk = function()
{
	console.log('Person is walking');
	this.nEnergy -= 5;
	return this;
};
Person.prototype.get = function(oPossession)
{
	console.log('Person receives a ' + oPossession.sType);
	this.aPossessions.push(oPossession);
};
Person.prototype.give = function(oPerson, oPossession)
{
	console.log(this.sName + ' gives a ' + oPossession.sType + ' to '+ oPerson.sName);
	oPerson.get(oPossession);
};