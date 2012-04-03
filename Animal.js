var Animal = function(nEnergy, sType)
{
	this.nEnergy = nEnergy || 0;
	this.bAlive = true;
	this.sType = sType || 'general';
};
Animal.prototype.beInjured = function(nEnergy)
{
	this.nEnergy -= nEnergy;
	if(this.nEnergy <= 0)
	{
		this.die();
	}
	return this;
};
Animal.prototype.die = function()
{
	this.nEnergy = 0;
	this.bAlive = false;
	return this;
};
Animal.prototype.increaseEnergy = function(nEnergy)
{
	this.nEnergy += nEnergy;
	return this;
};
Animal.prototype.bleedToDeath = function()
{
	console.log(this.sType + ' is bleeding to death!');
	while(this.nEnergy > 0)
	{
		this.beInjured(1);
	}
	this.die();
	return this;
};
Animal.prototype.eat = function(oAnimal)
{
	console.log(this.sType + ' is eating!');
	var nCounterEnergy = 0;
	var nEnergy = 0;
	if(oAnimal.bAlive === true)
	{
		oAnimal.die();
	}
	if(oAnimal instanceof Person)
	{
		nEnergy = 100;
		nCounterEnergy = 100;
	}else if(oAnimal instanceof Sheep)
	{
		nEnergy = 50;
		nCounterEnergy = 50;
	}

	while(nCounterEnergy--)
	{
		this.increaseEnergy(1);
	}
	console.log(this.sType + ' recovers ' + nEnergy + ' points of energy!');
	return this;
};
Animal.prototype.sleep = function()
{
	var nEnergyToBeRecovered =  this.nEnergy - (this.nEnergy * 0.3);
	console.log(this.sType + ' is sleeping!');
	this.increaseEnergy(nEnergyToBeRecovered);
	console.log(this.sType + ' recovers ' + parseInt(nEnergyToBeRecovered, 10) + ' points of energy!');
	return this;
};