const Discord = require('discord.js');
const { authorIsAdmin} = require('../message-utils');

module.exports = {
	name: 'name_my_cunt',
	aliases: ['cunt_name', 'cuntme', 'name_my_pussy', 'pussy_name', 'pussyme'],
	description: 'Gives the user\'s pussy a name',
	execute(message, args) {
		const leftWord = [
			'Tiny',
			'Tight',
			'Empty',
			'Gaping',
			'Dripping',
			'Leaky',
			'Moist',
			'Sucking',
			'Delicious',
			'Honey',
			'Sneaky',
			'Hidden',
			'Skirt',
			'Flappy',
			'Soft',
			'Cock',
			'Dick',
			'Fuck',
			'Slutty',
			'Bearded',
			'Fuzzy',
			'Furry',
			'Jizz',
			'Cum',
			'Semen',
			'Cock Milk',
			'Baby',
			'Baby Batter',
			'Smush',
			'Squishy',
			'Fish',
			'Fishy',
			'Ham',
			'South',
			'Southern',
			'Lower',
			'Slobber',
			'Pecker',
			'Cleaved',
			'Split',
			'Panty',
			'Wide',
			'Deep',
			'Hump',
			'Slimy',
			'Jock',
			'Bro',
			'Miss',
			'Ticklish',
			'Steamy',
			'Sweaty',
		].random();

		const rightWord = [
			'Crater',
			'Sock',
			'Sleeve',
			'Meat',
			'Roast Beef',
			'Beef',
			'Kitten',
			'Hole',
			'Paradise',
			'Target',
			'Split',
			'Sandwich',
			'Bruger',
			'Taco',
			'Clam',
			'Cockring',
			'Flesh',
			'Creek',
			'Drain',
			'Pothole',
			'Pocket',
			'Wrecker',
			'Bucket',
			'Beaver',
			'Crumpet',
			'Mouth',
			'Wound',
			'Party',
			'Lips',
			'Mine',
			'Ditch',
			'Cleavage',
			'Sucker',
			'Addict',
			'Fanatic',
			'Box',
		].random();

		message.reply(`your pussy's name is now **${leftWord} ${rightWord}**`);
	},
};