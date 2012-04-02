var TellTheHistory = function()
{
	this.nMillisecondsInADay = 86400000;
	this.oDragon = new Dragon();
	this.oKing = new King();
	this.oPrincess = new Princess('Cleodolinda');
	this.oKnight = new Knight('Saint George');
	this.oVillage = new Village('Montblanc');
	this.oPersonToBeSacrificed = null;

	this.fillVillage();
	this.fillFlock();
};
TellTheHistory.prototype.fillVillage = function()
{
	var nPerson = 0;
	var nLenPersons = this.oVillage.nMaxPersons;
	var oPerson = null;
	while(nLenPersons--)
	{
		this.oVillage.addPerson(new Person());
	}
	this.oVillage.addPerson(this.oKing);
	this.oVillage.addPerson(this.oPrincess);
};
TellTheHistory.prototype.fillFlock = function()
{
	var nSheep = 0;
	var nLenSheeps = this.oVillage.nMaxSheeps;
	var oSheep = null;
	while(nLenSheeps--)
	{
		this.oVillage.addSheep(new Sheep());
	}
};
TellTheHistory.prototype.savePrincess = function()
{
	var oRose = new Rose();
	var oKiss = new Kiss();

	this.oKnight.ride()
				.ride()
				.ride()
				.ride();
	this.oKnight.attackUsingSpear(this.oDragon);
	this.oDragon.bleedToDeath();
	oRose.comesUp();
	this.oKnight.give(this.oPrincess, oRose);
	this.oPrincess.give(this.oKnight, oKiss);
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
	this.oPersonToBeSacrificed = this.oVillage.toDrawPerson();

	if(this.oPersonToBeSacrificed.isPrincess())
	{
		this.savePrincess();
		return true;
	}

	this.sacrificeOrDestruction();

	setTimeout(function()
	{
		self.startDrawToSacrificeOnePerson();
	}, this.nMillisecondsInADay);
};
TellTheHistory.prototype.tell = function()
{
	this.oDragon.fly();

	this.oDragon.swim();

	this.oDragon.walk();

	this.oDragon.damageVillage(this.oVillage);

	debugger;
	if(this.oDragon.isBreathing() === false)
	{
		this.oDragon.blowVenomousBreath();
		this.airIsBeingPoisoned();
	}

	this.startDrawToSacrificeOnePerson();
};