// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, IntentsBitField } = require('discord.js');
const register = require('./commands/register');
require('dotenv').config()
let commands = []
// Create a new client instance
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, async (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
    commands = await register.execute()
});

client.on('interactionCreate', (interaction) => {
    if (interaction.isChatInputCommand()){
        console.log(interaction)
        commands.filter(command => command.name === interaction.commandName)[0].execute(interaction)
    }
    else if (interaction.isButton()){
        commands.filter(command => command.name === interaction.message.interaction.commandName)[0].onButtonClicked(interaction)
    }
    else if (interaction.isStringSelectMenu()){
        commands.filter(command => command.name === interaction.message.interaction.commandName)[0].onMenuSelected(interaction)
    }
})

// Log in to Discord with your client's token
client.login(process.env.PTB_TOKEN);