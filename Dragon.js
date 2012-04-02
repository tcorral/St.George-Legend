var Dragon = function()
{
	Animal.call(this, 1000);
	this.nPoisonUnits = 3000;
};
Dragon.prototype = new Animal();
Dragon = Interface.implement(FlyBehaviour, Dragon);
Dragon = Interface.implement(SwimBehaviour, Dragon);
Dragon = Interface.implement(WalkBehaviour, Dragon);
Dragon = Interface.implement(VenomousBehaviour, Dragon);
Dragon = Interface.implement(KillerBehaviour, Dragon);
Dragon.prototype.fly = function()
{
	this.nEnergy -= 20;
	return this;
};
Dragon.prototype.swim = function()
{
	this.nEnergy -= 10;
	return this;
};
Dragon.prototype.walk = function()
{
	this.nEnergy -= 5;
	return this;
};
Dragon.prototype.poison = function()
{
	this.nPoisonUnits -= 100;
	return this;
};
Dragon.prototype.blowVenomousBreath = function()
{
	this.poison();
	return this;
};
Dragon.prototype.kill = function(oAnimal)
{
	oAnimal.die();
	return this;
};
Dragon.prototype.damageVillage = function(oVillage)
{
	oVillage.beInjured(500);
	this.nEnergy -= 30;
	return this;
};