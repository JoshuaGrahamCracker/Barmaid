const Discord = require('discord.js');
const { authorIsAdmin} = require('../message-utils');

module.exports = {
	name: 'name_my_cock',
	aliases: ['cock_name', 'cockme'],
	description: 'Gives the user\'s cock a name',
	execute(message, args) {
		const leftWord = [
			'Gargantuan',
			'Massive',
			'Huge',
			'Throbbing',
			'Leaky',
			'Sweaty',
			'Needy',
			'Delicious',
			'Hidden',
			'Suspiciously',
			'Cunt',
			'Pussy',
			'Hole',
			'Sleeve',
			'Fuck',
			'Cummy',
			'Cute',
			'Adorable',
			'Humpy',
			'Bitch',
			'Lil\'',
			'Brain',
			'Slut',
			'Bimbo',
			'Oozing',
			'Trouser',
			'One-Eyed',
			'Crater',
			'Dipping',
			'Semen',
			'Cum',
			'Baby Batter',
			'Milky',
			'Short',
			'Long',
			'Skinny',
			'Pencil',
			'Prehensile',
			'Skin',
			'Middle',
			'Happy',
			'Joy',
			'Wiggly',
			'Lady',
			'Purple',
			'Ass',
			'Skirt',
			'Slutty',
			'Fiendish',
			'Sex',
			'Love',
			'Veiny',
			'Bliss',
			'Womb',
			'Nutty',
			'Kitty',
			'MILF',
			'GILF',
			'Wet',
			'Moist',
			'Sloppy',
			'Cylindrical',
			'Foot-Long',
			'Handy',
		].random();

		const rightWord = [
			'Anguish',
			'Destroyer',
			'Meat',
			'Rod',
			'Stick',
			'Chungus',
			'Stallion',
			'Stretcher',
			'Humper',
			'Member',
			'Breaker',
			'Nuke',
			'Shotgun',
			'Willy',
			'Snake',
			'Pipe',
			'Cyclops',
			'Lollipop',
			'Express',
			'Highway',
			'Demon',
			'Pony',
			'Bro',
			'Friend',
			'\'Splosion',
			'Miner',
			'Flute',
			'Stump',
			'Trunk',
			'Annihilator',
			'Dong',
			'Rocket',
			'Johnson',
			'Richard',
			'Wonder Worm',
			'Worm',
			'Wiggler',
			'Killer',
			'Murderer',
			'Assassin',
			'Drill',
			'Wand',
			'Salami',
			'Pistol',
			'Muscle',
			'Flesh',
			'Broom',
			'Sweeper',
			'Cleaner',
			'Drainer',
			'Hose',
			'Sprayer',
			'Shooter',
			'Pump',
			'Simp',
			'Shrimp',
		].random();

		message.reply(`your cock's name is now **${leftWord} ${rightWord}**`);
	},
};