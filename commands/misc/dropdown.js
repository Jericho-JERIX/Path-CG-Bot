const { ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

const dropdown = new ActionRowBuilder()
.addComponents(
    new StringSelectMenuBuilder()
        .setCustomId('select')
        .setPlaceholder('Nothing selected')
        .addOptions(
            {
                label: 'Select me',
                description: 'This is a description',
                value: 'first_option',
            },
            {
                label: 'You can select me too',
                description: 'This is also a description',
                value: 'second_option',
            },
        ),
)

module.exports = {
	name: "dropdown",
    description: "Counting number for you",
    options: [],
	async execute(interaction) {
		await interaction.reply({content: `This is dropdown`, components: [dropdown]});
	},

	async onMenuSelected(interaction){
        switch(interaction.values[0]){
            case "first_option":
                await interaction.update({content: `Select 1`})
                break
            
            case "second_option":
                await interaction.update({content: `Select 2`})
                break
            
        }
        console.log(interaction)
	}
};