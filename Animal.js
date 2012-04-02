var Animal = function(nEnergy)
{
	this.nEnergy = nEnergy || 0;
	this.bAlive = true;
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
	while(this.nEnergy > 0)
	{
		this.beInjured(1);
	}
	this.die();
	return this;
};
Animal.prototype.eat = function(oAnimal)
{
	var nEnergy = 0;
	if(oAnimal.bAlive === true)
	{
		oAnimal.die();
	}
	if(oAnimal instanceof Person)
	{
		nEnergy = 100;
	}else if(oAnimal instanceof Sheep)
	{
		nEnergy = 50;
	}

	while(nEnergy--)
	{
		this.increaseEnergy(1);
	}
	return this;
};
Animal.prototype.sleep = function()
{
	this.nEnergy += 800;
	return this;
};