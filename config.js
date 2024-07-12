const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐈𝐒𝐑𝐀𝐑 𝐔𝐌𝐀𝐑𝐈²²¹-ᴍᴅ" 


global.devs = "923308363433" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923308363433";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923308363433,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_12_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAwLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDc5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMixcbiAgICAgICAgMjksXG4gICAgICAgIDE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg1LFxuICAgICAgICA3MyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMixcbiAgICAgICAgMTU4LFxuICAgICAgICA5MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDcyLFxuICAgICAgICAzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg3LFxuICAgICAgICA2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDczLFxuICAgICAgICA5MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMcEhSaGVLem44NUp2aWlva0tsRFJEYzdRUE9wUGpWdzFQZmxTbEFRc0lvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMwODM2MzQzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDBENjYyQjZFMjRBNkY1MjU1QTE0RUEzODk2RDNBMUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzg2MzMxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5QNm45d01oVGVxRVRuT3BoTndBNmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjJmNjM5ZDUtNzYwNS00MzlkLTlkNzktZjcwZjYwNDBiZDIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgMTYyLFxuICAgICAgNDksXG4gICAgICA0OSxcbiAgICAgIDE0LFxuICAgICAgMjM0LFxuICAgICAgNjEsXG4gICAgICA5NixcbiAgICAgIDExNCxcbiAgICAgIDczLFxuICAgICAgMjIsXG4gICAgICAzOCxcbiAgICAgIDE3OSxcbiAgICAgIDcyLFxuICAgICAgMyxcbiAgICAgIDE0MyxcbiAgICAgIDg0LFxuICAgICAgMjI2LFxuICAgICAgMjUwLFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOSxcbiAgICAgIDkzLFxuICAgICAgMjAyLFxuICAgICAgMTkyLFxuICAgICAgNDUsXG4gICAgICAxNjMsXG4gICAgICAxOTMsXG4gICAgICAwLFxuICAgICAgNDksXG4gICAgICAxMCxcbiAgICAgIDMxLFxuICAgICAgMTM4LFxuICAgICAgMSxcbiAgICAgIDE4NixcbiAgICAgIDY2LFxuICAgICAgMTQzLFxuICAgICAgNzUsXG4gICAgICAxMzgsXG4gICAgICAxMDAsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREc2UEJHNlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMwODM2MzQzMzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTE1MDAxNzY2MTc1OTY6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJGaWdodGVyMzEzXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSytLdXRNQ0VKVzd4TFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwUTZWQ1pqZklIMytxcytKVU94ZkFBdzd0eDNvK25JQ05VZXp5dVVCUnpZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZZRC9hRDFoZ2FVcDRjRGdBbXlGY0VHTmV0N3lpK0o2RkE3Q3AwRHdabW02cGRlcXhmMFRCN2dzUDhrbElQdHRvVEZWT0VaL2M0blVONlFDSWlIM0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVVQjF5ckJWVzBvWG52NUhDQUgzSVROanVnMnR5QXQyaHhoUUNYQUN0MUhIV0puQXNuZEkwWG1hUUh0Tlc1ZTFhUEppam44Vk1ZdUNmeHZySVd3SkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMwODM2MzQzMzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3ODYzMjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBNkZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUE2Ri5qc29uIjogIntcImtleURhdGFcIjpcInp5Tk1COEU4K2NkYm41bGlDaktRdmUvRnAyc3hnMmppQlZodXFCVHc0Ujg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzExODg2MTI3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3ODUzMDY4MDNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: 𝐈𝐒𝐑𝐀𝐑 𝐔𝐌𝐀𝐑𝐈-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐈𝐒𝐑𝐀𝐑 𝐔𝐌𝐀𝐑𝐈²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • 𝐈𝐒𝐑𝐀𝐑 𝐔𝐌𝐀𝐑𝐈 ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝐈𝐒𝐑𝐀𝐑 𝐔𝐌𝐀𝐑𝐈-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝐈𝐒𝐑𝐀𝐑 𝐔𝐌𝐀𝐑𝐈",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "𝐈𝐒𝐑𝐀𝐑 𝐔𝐌𝐀𝐑𝐈"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
