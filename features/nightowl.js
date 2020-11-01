const mongo = require("../util/mongo");
const command = require("../util/command");

module.exports = client => {
    client.on('message', message => {
        if(message.author.bot) return;
        if(message.content.toLowerCase() === '!notify'){
            switch(Math.floor(Math.random() * 10)){
                case 0: message.channel.send("https://www.youtube.com/watch?v=39ocMBfDiVQ"); break;
                case 1: message.channel.send("https://www.youtube.com/watch?v=bAUAzm9t_8k"); break; 
                case 2: message.channel.send("https://www.youtube.com/watch?v=HliLbXkRTD8"); break; 
                case 3: message.channel.send("https://www.youtube.com/watch?v=yiaCXAg_Wyw"); break; 
                case 4: message.channel.send("https://www.youtube.com/watch?v=f79HTqa_iXo"); break; 
                case 5: message.channel.send("https://www.youtube.com/watch?v=MAaoKnkOPRs"); break; 
                case 6: message.channel.send("https://www.youtube.com/watch?v=Wf1VN1pMGm8"); break; 
                case 7: message.channel.send("https://www.youtube.com/watch?v=bAUAzm9t_8k"); break; 
                case 8: message.channel.send("https://www.youtube.com/watch?v=EzR2SXY7gWw"); break; 
                case 9: message.channel.send("https://www.youtube.com/watch?v=ZxHz2jehecI"); break; 
                default: message.channel.send("owo"); break; 

            }
            
        }
    });
}