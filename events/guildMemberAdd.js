const loglar = require('../loglar.json');

var prefix = loglar.prefix;

module.exports = member => {
    let username = member.user.username;
    member.sendMessage(``);
};