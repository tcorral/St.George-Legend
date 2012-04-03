var TellTheHistory = function()
{
	this.nMillisecondsInADay = 86400000;
	this.oDragon = new Dragon();
	this.oKing = new King();
	this.oPrincess = new Princess('Cleodolinda');
	this.oKnight = new Knight('Saint George');
	this.oVillage = new Village('Montblanc');
	this.oPersonToBeSacrificed = null;

	console.log('-------------------------------------------------------------------------------');
	console.log('Filling village and flock!');
	console.log('-------------------------------------------------------------------------------');
	this.fillVillage();
	this.fillFlock();
	console.log('-------------------------------------------------------------------------------');
	console.log('End filling village and flock!');
	console.log('-------------------------------------------------------------------------------');
};
TellTheHistory.prototype.fillVillage = function()
{
	var nLenPersons = this.oVillage.nMaxPersons;
	console.log('-------------------------------------------------------------------------------');
	console.log('Village population is growing!');
	console.log('-------------------------------------------------------------------------------');
	while(nLenPersons--)
	{
		this.oVillage.addPerson(new Person());
	}
	this.oVillage.addPerson(this.oKing);
	this.oVillage.addPerson(this.oPrincess);
	console.log('-------------------------------------------------------------------------------');
	console.log('Village growing has finished!');
	console.log('-------------------------------------------------------------------------------');
};
TellTheHistory.prototype.fillFlock = function()
{
	console.log('-------------------------------------------------------------------------------');
	console.log('Village flock is growing!');
	console.log('-------------------------------------------------------------------------------');
	var nLenSheeps = this.oVillage.nMaxSheeps;
	while(nLenSheeps--)
	{
		this.oVillage.addSheep(new Sheep());
	}
	console.log('-------------------------------------------------------------------------------');
	console.log('Village flock growing has finished!');
	console.log('-------------------------------------------------------------------------------');
};
TellTheHistory.prototype.savePrincess = function()
{
	console.log('-------------------------------------------------------------------------------');
	console.log('St.George arrived to ' + this.oVillage.sName + '!');
	console.log('-------------------------------------------------------------------------------');
	console.log('-------------------------------------------------------------------------------');
	console.log('St.George is going to save the princess!');
	console.log('-------------------------------------------------------------------------------');
	var oRose = new Rose();
	var oKiss = new Kiss();

	console.log('-------------------------------------------------------------------------------');
	console.log("St.George rides to Dragon's Lair!");
	console.log('-------------------------------------------------------------------------------');
	this.oKnight.ride()
				.ride()
				.ride()
				.ride();
	console.log('-------------------------------------------------------------------------------');
	console.log("St.George arrived to Dragon's Lair!");
	console.log('-------------------------------------------------------------------------------');
	this.oKnight.attackUsingSpear(this.oDragon);
	this.oDragon.bleedToDeath();
	oRose.comesUp();
	this.oKnight.give(this.oPrincess, oRose);
	this.oPrincess.give(this.oKnight, oKiss);
	console.log('-------------------------------------------------------------------------------');
	console.log('St.George saved the princess and leaves ' + this.oVillage.sName + '!');
	console.log('-------------------------------------------------------------------------------');
};
TellTheHistory.prototype.loopOverSheeps = function(nLenSheeps, fpCallback)
{
	var nSheep = 0;
	var oSheep = null;

	for(; nSheep < nLenSheeps; nSheep++)
	{
		oSheep = this.oVillage.getSheep();
		fpCallback.call(this, oSheep, nSheep);
	}
	nSheep = oSheep = null;
};
TellTheHistory.prototype.loopOverPersons = function(nLenPersons, fpCallback)
{
	var nPerson = 0;
	var oPerson = null;

	for(; nPerson < nLenPersons; nPerson++)
	{
		oPerson = this.oVillage.getPerson();
		if(fpCallback.call(this, oPerson, nPerson) === false)
		{
			nLenPersons++;
		}
	}
	nPerson = oPerson = null;
};
TellTheHistory.prototype.airIsBeingPoisoned = function()
{
	var nLenPersons = 200;
	var nLenSheeps = 200;

	this.loopOverPersons(nLenPersons, function(oPerson, nIndex)
	{
		if(oPerson !== this.oKing || oPerson !== this.oPrincess)
		{
			oPerson.die();
			return true;
		}
		return false;
	});

	this.loopOverSheeps(nLenSheeps, function(oSheep, nIndex)
	{
		oSheep.die();
	});
	console.log('-------------------------------------------------------------------------------');
	console.log("Village has lost " + nLenPersons + " persons by Dragon's venomous breath!");
	console.log("Village has lost " + nLenSheeps + " sheeps by Dragon's venomous breath!");
	console.log('-------------------------------------------------------------------------------');
};
TellTheHistory.prototype.villageIsDamaged = function()
{
	var nLenPersons = 100;
	var nLenSheeps = 100;

	this.loopOverPersons(nLenPersons, function(oPerson, nIndex)
	{
		if(oPerson !== this.oKing || oPerson !== this.oPrincess)
		{
			this.oDragon.kill(oPerson);

			if((nIndex % 10) === 0)
			{
				this.oDragon.eat(oPerson);
			}
			return true;
		}
		return false;
	});

	this.loopOverSheeps(nLenSheeps, function(oSheep, nIndex)
	{
		this.oDragon.kill(oSheep);

		if((nIndex % 10) === 0)
		{
			this.oDragon.eat(oSheep);
		}
		oSheep.die();
	});
	console.log('-------------------------------------------------------------------------------');
	console.log('Village has lost ' + nLenPersons + ' persons!');
	console.log('Village has lost ' + nLenSheeps + ' sheeps!');
	console.log('-------------------------------------------------------------------------------');
	this.oVillage.beDamaged();
	this.oDragon.sleep();
};
TellTheHistory.prototype.sacrificeOrDestruction = function()
{
	if(this.oVillage.sendPersonToBeSacrificed(this.oPersonToBeSacrificed))
	{
		this.oDragon.kill(this.oPersonToBeSacrificed)
					.eat(this.oPersonToBeSacrificed)
					.sleep();
	}else
	{
		this.villageIsDamaged();
	}
};
TellTheHistory.prototype.startDrawToSacrificeOnePerson = function()
{
	var self = this;
	var bSaveThePrincessNow = false;
	this.oPersonToBeSacrificed = this.oVillage.toDrawPerson();

	if(this.oPersonToBeSacrificed.isPrincess())
	{
		this.savePrincess();
		return true;
	}

	this.sacrificeOrDestruction();
	bSaveThePrincessNow = confirm('Do you want to save the princess now?\r\n');
	if(bSaveThePrincessNow == false)
	{
		console.log('-------------------------------------------------------------------------------');
		console.log('Waiting for a new Day for a new draw!');
		console.log('-------------------------------------------------------------------------------');
		setTimeout(function()
		{
			self.startDrawToSacrificeOnePerson();
		}, this.nMillisecondsInADay);
	}else
	{
		this.savePrincess();
		return true;
	}

};
TellTheHistory.prototype.tell = function()
{
	console.log('-------------------------------------------------------------------------------');
	console.log('Dragon can move in different ways!')
	console.log('-------------------------------------------------------------------------------');
	this.oDragon.fly();

	this.oDragon.swim();

	this.oDragon.walk();
	console.log('-------------------------------------------------------------------------------');

	console.log('-------------------------------------------------------------------------------');
	console.log('Dragon damage village!');
	console.log('-------------------------------------------------------------------------------');
	this.oDragon.damageVillage(this.oVillage);
	console.log('-------------------------------------------------------------------------------');

	console.log('-------------------------------------------------------------------------------');
	console.log("Dragon's breath kills people and sheeps!");
	console.log('-------------------------------------------------------------------------------');
	if(this.oDragon.isBreathing() === false)
	{
		this.oDragon.blowVenomousBreath();
		this.airIsBeingPoisoned();
	}

	this.startDrawToSacrificeOnePerson();
};