var Rose = function()
{
	this.sState = 'seed';
	this.sType = 'rose';
};
Rose.prototype.comesUp = function()
{
	console.log('Rose is coming up! Now is a beautiful flower!');
	this.sState = 'flower';
};