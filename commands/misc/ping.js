const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const Button = new ActionRowBuilder().addComponents(
	new ButtonBuilder().setCustomId("ping-1").setLabel("Test").setStyle(ButtonStyle.Primary)
)

module.exports = {
	name: "ping",
    description: "Replies with Pong!",
    options: [],
	async execute(interaction) {
		console.log(interaction)
		await interaction.reply({content: "Pong", components: [Button]});
	},

	async onButtonClicked(interaction){
		console.log("Press!!!",interaction)
	}
};