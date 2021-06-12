//  Requires the discord.js module
const Discord = require('discord.js');

//	Calls the config.json file containing prefix/token
const config = require('./config.json');
//	Creates a new Discord Client
const client = new Discord.Client();

//  When the client is ready, run this code
//  This code will only trigger once, during the login.
// Logs to the console to say application is ready
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === `${config.prefix}ping`) {
		//  sends back "Pong." to channel the message was sent in
		message.channel.send('Pong.');
	}
	//	If message in channel starts with ${config.prefix}beep bot will return Boop even if text is placed after call.
	else if(message.content.startsWith(`${config.prefix}beep`)) {

		message.channel.send('Boop.');
	}

	else if (message.content === `${config.prefix}server`) {
		// sends the server name, total members and what channel message was sent in. Uses guide attribute.
		message.channel.send(`Server Name: ${message.guild.name} \nTotal Members: ${message.guild.memberCount}\nThis message was sent in ${message.channel.name}`);
	}

	else if (message.content === `${config.prefix}author`) {
		message.channel.send('Link to the authors Github: https://github.com/VirtualHoriz0n ');
	}

	else if (message.content === `${config.prefix}userinfo`) {
		// uses the author (user) attribute to obtain info about user ie name/id.
		message.channel.send(`Username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
});


//  Log in using the token found in config.json
client.login(config.token);

