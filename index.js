//  Requires the discord.js module
const Discord = require('discord.js');
//  Creates a new Discord client
const client = new Discord.Client();

//  When the client is ready, run this code
//  This code will only trigger once, during the login.
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		//  sends back "Pong." to channel the message was sent in
		message.channel.send('Pong.');
	}
});


//  Log in using the token
client.login('ODUyNjAxOTQ2OTc5MTcyMzgz.YMJNcA.PU9fpKqOeH4a8Pl_luShGgGQmIc');