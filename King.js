var King = function()
{
	Person.call(this, 'The King', 300);
};
King.prototype = new Person();