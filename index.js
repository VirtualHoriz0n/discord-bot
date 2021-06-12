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

	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	/*
	Older args variable - replaced with new which will ignore spaces and not add blank spaces to array
	const args = message.content.slice(config.prefix.length).trim().split(' ');*/
	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

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

	else if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`You didn't provid any arguments ${message.author}`);
		}

		else if (args[0] === 'Foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Command Name: ${command} \nArguments: ${args}`);
	}

	else if (command === 'kick') {
		// If no users are mentioned, returns a falsy value
		if (!message.mentions.users.size) {
			return message.reply('You need to mention a user.');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	}

	else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ format: 'png', dynamic: true })}`;
		});

		// Send the entire array of strings as a message
		// By Default, discord.js will .join the array with \n
		message.channel.send(avatarList);

	}

});


//  Log in using the token found in config.json
client.login(config.token);

