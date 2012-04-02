var Village = function(sName)
{
	this.sName = sName;
	this.nMaxPersons = 5000;
	this.nMaxSheeps = 8000;
	this.nKing = 1;
	this.nPrincess = 1;
	this.nEnergy = 50000;
	this.aPersons = [];
	this.aSheeps = [];
};
Village.prototype.getPerson = function()
{
	if((this.aPersons.length % 2) === 0)
	{
		console.log('Village ' + this.sName + ' returns an old person!');
		return this.aPersons.shift();
	}else
	{
		console.log('Village ' + this.sName + ' returns a young person!');
		return this.aPersons.pop();
	}
};
Village.prototype.getSheep = function()
{
	if((this.aSheeps.length % 2) === 0)
	{
		console.log('Village ' + this.sName + 'returns an old sheep!');
		return this.aSheeps.shift();
	}else
	{
		console.log('Village ' + this.sName + 'returns a young sheep!');
		return this.aSheeps.pop();
	}
};
Village.prototype.addPerson = function(oPerson)
{
	console.log('Village ' + this.sName + ' population is growing!');
	if(this.aPersons.length < (this.nMaxPersons + this.nKing + this.nPrincess))
	{
		this.aPersons.push(oPerson);
	}
};
Village.prototype.addSheep = function(oSheep)
{
	console.log('Village ' + this.sName + ' flock is growing!');
	if(this.aSheeps.length < this.nMaxSheeps)
	{
		this.aSheeps.push(oSheep);
	}
};
Village.prototype.toDrawPerson = function()
{
	console.log('Village ' + this.sName + ' is drawing the person to be sacrificed!');
	return this.aPersons[parseInt(Math.random() * this.aPersons.length, 10)];
};
Village.prototype.sendPersonToBeSacrificed = function(oPerson)
{
	console.log("Person is walking to the Dragon's Lair!");
	oPerson.walk();
	oPerson.walk();
	oPerson.walk();
	oPerson.walk();
	oPerson.walk();
	return true;
};
Village.prototype.beDamaged = function()
{
	console.log('Village ' + this.sName + ' is being damaged!');
	this.nEnergy -= 1000;
};