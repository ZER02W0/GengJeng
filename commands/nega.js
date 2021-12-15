const ytdl = require("ytdl-core-discord");
const scdl = require("soundcloud-downloader").default;
const { canModifyQueue, STAY_TIME } = require("../util/Util");
const i18n = require("../util/i18n");

module.exports = {
    name: "nega",
    description: "nega but in Thailand accent",
    execute(message, args) {
      if (command === "nega") {
        var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL")
    VC.join()
        .then(connection => {
            const dispatcher = connection.playFile('D:/Music/nega.mp3');
            dispatcher.on("end", end => {VC.leave()});
        })
        .catch(console.error);
};
    }
  };