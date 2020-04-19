const Discord = require('discord.js');

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}

function parseMentions(message) {
    // Match all user mentions.
    const matches = [...message.content.matchAll(/<@!?(\d+)>/ig)];

    // No user mentions found.
    if (!matches) return;

    let users = [];

    for(let i = 0; i < matches.length; i++) {
        users.push(message.client.users.resolve(matches[i][1]));
    }
    //Should return an array of UIDs in left to right order.
    return users;
}

function authorIsAdmin(message) {
    return message.member.permissions.has(Discord.Permissions.ADMINISTRATOR);
}

module.exports = {
    getUserFromMention,
    parseMentions,
    authorIsAdmin
}