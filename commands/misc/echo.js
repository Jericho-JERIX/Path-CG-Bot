const { SlashCommandBuilder,ApplicationCommandOptionType } = require('discord.js');

module.exports = {
	name: "echo",
    description: "Echo your message",
    options: [
        {
            name: "message",
            description: "Message that you want to echo",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
	async execute(interaction) {
        const message = interaction.options.get('message')
		await interaction.reply(`Echo Message: ${message.value}`);
	},
};