var Animal = function(nEnergy, sType)
{
	this.nEnergy = nEnergy || 0;
	this.bAlive = true;
	this.sType = sType || 'general';
};
Animal.prototype.beInjured = function(nEnergy)
{
	console.log('This ' + this.sType + ' is being injured!');
	this.nEnergy -= nEnergy;
	if(this.nEnergy <= 0)
	{
		this.die();
	}
	return this;
};
Animal.prototype.die = function()
{
	console.log(this.sType + ' has died!');
	this.nEnergy = 0;
	this.bAlive = false;
	return this;
};
Animal.prototype.increaseEnergy = function(nEnergy)
{
	console.log(this.sType + ' is getting well!');
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
	console.log(this.sType + ' is sleeping!');
	this.increaseEnergy(800);
	return this;
};