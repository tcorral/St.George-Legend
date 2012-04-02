var Dragon = function()
{
	Animal.call(this, 1000, 'Dragon');
	this.sType = 'Dragon';
	this.nPoisonUnits = 3000;
	this.bIsBreathing = false;
};
Dragon.prototype = new Animal();
Dragon = Interface.implement(FlyBehaviour, Dragon, false);
Dragon = Interface.implement(SwimBehaviour, Dragon, false);
Dragon = Interface.implement(WalkBehaviour, Dragon, false);
Dragon = Interface.implement(VenomousBehaviour, Dragon, false);
Dragon = Interface.implement(KillerBehaviour, Dragon, false);
Dragon.prototype.isBreathing = function()
{
	return this.bIsBreathing;
};
Dragon.prototype.fly = function()
{
	console.log('Dragon is flying!');
	this.nEnergy -= 20;
	return this;
};
Dragon.prototype.swim = function()
{
	console.log('Dragon is swimming!');
	this.nEnergy -= 10;
	return this;
};
Dragon.prototype.walk = function()
{
	console.log('Dragon is walking!');
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
	this.bIsBreathing = true;
	console.log('Dragon is blowing a venomous breath that kills!');
	this.poison();
	this.bIsBreathing = false;
	return this;
};
Dragon.prototype.kill = function(oAnimal)
{
	console.log('Dragon is killing a' + oAnimal.sType);
	oAnimal.die();
	return this;
};
Dragon.prototype.damageVillage = function(oVillage)
{
	console.log(oVillage.sName + ' is being damaged by Dragon!');
	oVillage.beDamaged();
	this.nEnergy -= 30;
	return this;
};