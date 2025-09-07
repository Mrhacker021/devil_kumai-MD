const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEN3UmtvN3JhWVY2NzNOd0Z0T1hKU1VPZ25ES3l3NG4xWFNzQ2xRNklWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEhVTEd1bGNPYk5MNU0xR0x4Qms4VjhUSjZFRXJUSkVxVGhtTTZxdnBWaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTEppZmpaSkVPUVcrV3l2bmoyQkRnczVFUFM5dXZocXluTFNXZUI0Um5JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrMHJXSUFNNnlaUnB2TnZzOE92OGVCVkJUbEpnbEhOS2lDZ2Y1bDdTcFRZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1OREZPR2MzSW1FZDZ2c3ZRdC9kWVozdG9oamRVQnFac2FuUlhKTU12bUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklCNlZBRDNCZ3BkSW9wNW54SVB2STBnYlpOSWs2RFVBK2tUTHdBakpWMkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkVjdlo3Skt3MlFXRml2Z1QxVVRWRWpWd3FmRytiZVlnYkhvL29DQ2VsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9rWDNBTS9JWit6VC9WSVhXcVZGeVpKSFFVSTl4TjI1aHdxOCs0OEhDVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBaZ0UyTEFzbUxmbm45Y005M2xESzdQcWp5ZFpjU2R3MXVGUWhuYzRYMlhWZTdXR012MTVvRkVHbCtMbzJCejJURTBEaUZWNUxvckJzRGRSQ2ZCT0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE1LCJhZHZTZWNyZXRLZXkiOiJrT2RaKy92TTQ2T2svVlovc1ZtblNVTXpyUUcxcDgrT1B2dWpDYmNyN21ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJWSlhXUkJESyIsIm1lIjp7ImlkIjoiOTIzNDY2MjQ4NjQ5OjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IktvbUFpbCBHIiwibGlkIjoiNjMzNDI3ODE2NjEzOTk6MTNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQbVEvWVFDRU9lSTk4VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6Z0VzUFR6eXBucXNIaTRTY3Z5RVdTSW55VVJobE1pZkVjT1FUZjBGZEVrPSIsImFjY291bnRTaWduYXR1cmUiOiJZYjRZTkdQeURzT2Mrb3Yzb0RsU0xSQnB0QlFJQi9aNWhVQ1hHeUtsTFd2d0FJZ0w4dVpNeXNSV3N2NzBDb2pqSFNKTllnYmtNMnBqM2xua294NEpDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZFRJbFJ4V0lOVjlReWE2dGw0eGJZdGxMeVkrakhUaTJsVWI0L2FlQlB6NnBFTjhZR2pMbVhXSldyRmMyZHZBQTFVbG81dEYwM0JnZXRaNHBSL0J6QUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0NjYyNDg2NDk6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYzRCTEQwODhxWjZyQjR1RW5MOGhGa2lKOGxFWVpUSW54SERrRTM5QlhSSiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3MjY3MDQ5LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQifQ==",
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
