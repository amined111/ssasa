const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready',async () => {
   let GUILDID = '510402549619228682'; //
  let CHANNELID = '510407641495896066'; //



  voiceStay(GUILDID, CHANNELID);
  function voiceStay(guildid, channelid) {
    if(!guildid) throw new Error('Syntax: voiceStay function requires guildid');
    if(!channelid) throw new Error('Syntax: voiceStay function requires channelid');

    let guild = client.guilds.get(guildid);
    let channel = guild.channels.get(channelid);

    if(channel.type === 'voice') {
      channel.join().catch(e => {
        console.log(`Failed To Join :: ${e.message}`);
      });
    } else {
      console.log(`Channel Type :: ${channel.type}, It must be Voice.`);
    }
  }
});
client.login("Mjg4NDI1MDE1NzM1NzQ2NTYx.Dv2Qwg.gk73juAeqoR_kIcKKdeahgGiFis");
