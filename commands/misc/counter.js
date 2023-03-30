const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const button = new ActionRowBuilder().addComponents(
	new ButtonBuilder().setCustomId("increment-0").setLabel("+").setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId("decrement-0").setLabel("-").setStyle(ButtonStyle.Danger)
)

let count

module.exports = {
	name: "counter",
    description: "Counting number for you",
    options: [],
	async execute(interaction) {
		await interaction.reply({content: `Counter 0`, components: [button]});
	},

	async onButtonClicked(interaction){
        const arg = interaction.customId.split("-")
        count = Number(arg[1])
        switch(arg[0]){
            case "increment":
                count++
                break

            case "decrement":
                count--
                break
        }
        const newButton = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId(`increment-${count}`).setLabel("+").setStyle(ButtonStyle.Success),
            new ButtonBuilder().setCustomId(`decrement-${count}`).setLabel("-").setStyle(ButtonStyle.Danger)
        )
		interaction.update({content: `Counter ${count}`, components: [newButton]})
	}
};