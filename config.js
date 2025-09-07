const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOExUQUlaMjVTdElzM1pXemFYOGtGUC85VEkxcXpjeWJJQy9idlRZM2pVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2JuK2taQnJjb0RCR29VWW96aTNVRjBJT0hGNXgzRXRKb1hJVXJmT1hGYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQ1ZvTDJ0VGI1Yis2Sk9wbk5iak9JODhneDNBRlFTTkM1QjJBbWRlT2xZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlckw4azdIbXF3Wi9COGJqUnJ6TkJnWE9wQ05SamF6NFVUSmhCNHZRWVI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZCZjhRak1PNHUxMGtKSFVVQkozRW9FcGwvY2hvSHRBVy9LdWIwbU9lMGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRyQjZnUlJFWjJ4ZHVmWDk0b0dycUY3RzJxeVMrOGFvdDhUSEw2V0tRakk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUdncFhaK3VlYkJjZnM5Zk02TENxUW1FS3VvVFRYYjVNSVZWbkFNdGhGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEwzcnNCaHduaElyVEpIbkRDOUpaSEo1ZFZ4MktJZFZBNGlZOUtrRjluaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdjNFY4V29zUForVDVmZjhsbkR1NjQ5NWc5SmE0Q3BMaG9HV2FGcXhaYThkNlpLbTZHSFlVdFRBdWRvRHNOazNJeXVXUkpta0V2VG1wZmFTZzFrc0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6ImRvcTdEVVlidHBBT3JmNi9VeWFYVDV3blE5SmIxekEzdWwvZzRORWNMRVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlRZSzJNUDkxIiwibWUiOnsiaWQiOiI5MjMwOTI3NjI1OTc6MzFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNzkyNDIxNjQxNDYyNTY6MzFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOelZnUE1ERUovYzljVUdHQkFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqMk5CVVZmQkRuT1o3WTlYWFhJaTFrNzVvcllpWG8rQWprR0xGMG0zdHpNPSIsImFjY291bnRTaWduYXR1cmUiOiJvQjFHZ084Y1k3dHNxTlVEcWdQK0dJZGc3bEZBM3BuTHkwZDhpT2FXdUNBaGVJZFFuSGIyUjFQYzFXMEQvYTV4MmY1N3VTRFE0SkdoaXpDT2dqUnpCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicWNrUEVuTFE2UnNsSFR2bHA3TWd1d2t1Q2tSNWUwZ0ZXeEN2NjhrOGxBZVJIdnJqblNXWkhDdkFkNkdES2NtNmZSbE55dmhBVkxpR3RtVGxhM0t4Q1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwOTI3NjI1OTc6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTlqUVZGWHdRNXptZTJQVjExeUl0Wk8rYUsySWw2UGdJNUJpeGRKdDdjeiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3MjQ0OTYyLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝕯𝖊𝖛𝖎𝖑-𝕶𝖚𝖒𝖆𝖎𝖑-𝐵𝑜𝓉 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝕯𝖊𝖛𝖎𝖑-𝕶𝖚𝖒𝖆𝖎𝖑-𝐵𝑜𝓉",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝕯𝖊𝖛𝖎𝖑-𝕶𝖚𝖒𝖆𝖎𝖑-𝐵𝑜𝓉",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923092762597",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*𝕶𝖚𝖒𝖆𝖎𝖑_𝑀𝒟 Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝕶𝖚𝖒𝖆𝖎𝖑_𝑀𝒟 Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923092762597",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
