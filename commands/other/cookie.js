const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

exports.run = (bot, message, args) => {
    if (args.length < 1) return message.channel.send("Please provide some text to clap!")
    
    message.channel.send(args.map(randomizeCase).join(':cookie:'));

    message.delete();

}

module.exports.help = {
    name: "cookie"
}