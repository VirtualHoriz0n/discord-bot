//  Requires the discord.js module
const Discord = require('discord.js');

//	Calls the config.json file containing prefix/token
const config = require.resolve('./config.json');
//	Creates a new Discord Client
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


//  Log in using the token found in config.json
client.login(config.token);