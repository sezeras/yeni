const prefix = "n!"
exports.run = async (client, message, level) => {
    if (!message.content.startsWith(prefix)) return;

    message.channel.send('**SΔ°GARA Δ°ΓME**').then(async msg => {
        setTimeout(() => {
            msg.edit('π¬');
        }, 500);
        setTimeout(() => {
            msg.edit('π¬ β ');
        }, 1000);
        setTimeout(() => {
            msg.edit('π¬ ββ ');
        }, 1500);
        setTimeout(() => {
            msg.edit('π¬ βββ ');
        }, 2000);
        setTimeout(() => {
            msg.edit('π¬ ββ');
        }, 2500);
        setTimeout(() => {
            msg.edit('π¬ β');
        }, 3000);
        setTimeout(() => {
            msg.edit('π¬ ');
        }, 3500);
      
     setTimeout(() => {
            msg.edit(`BitmiΕ sigara`);
        }, 4000);
    });
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "sigara",
    category: "Fun",
    description: "Smoke everyday :dab:",
    usage: "sigara"
};