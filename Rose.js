var Rose = function()
{
	this.sState = 'seed';
	this.sType = 'rose';
};
Rose.prototype.comesUp = function()
{
	console.log("Rose is coming out! It's becoming a beautiful flower.");
	this.sState = 'flower';
};