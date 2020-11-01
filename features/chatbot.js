const mongo = require("../util/mongo");
const command = require("../util/command");

module.exports = client => {
    client.on('message', async (message) => {
        if(message.author.bot) return;
        if(message.content.toString().length == 1){
            message.delete();
        }
        if(message.content.toLowerCase().charAt(0) === 'h' || message.content.toLowerCase().charAt(0) === 'u' || message.content.toLowerCase().charAt(0) === '.' || message.content.toLowerCase().charAt(0) === '*' ){
            if(message.content.toLowerCase().charAt(1) === 'm' || message.content.toLowerCase().charAt(1) === 'u' || message.content.toLowerCase().charAt(1) === 'h' || message.content.toLowerCase().charAt(2) === 'h' || message.content.toLowerCase().charAt(3) === 'h' || message.content.toLowerCase().charAt(1) === '.')
            {
                message.delete();
            }
        }
        if(message.content.toLowerCase().charAt(0) === 'm' || message.content.toLowerCase().charAt(0) === 'b' || message.content.toLowerCase().charAt(0) === '.' || message.content.toLowerCase().charAt(0) === '*' ){
            if(message.content.toLowerCase().charAt(2) === 'u' || message.content.toLowerCase().charAt(3) === 'h' || message.content.toLowerCase().charAt(4) === 'h')
            {
                message.delete();
            }
        }
        
    })
}