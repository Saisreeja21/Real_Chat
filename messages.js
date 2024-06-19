const moment = require('moment');

function formatMessage(username, text) {
    return {
        username,
        text,
        time: moment().format('h:mm a')
    };

}


// Listen for the 'message' event from the server
// socket.on('message', (message) => {
//     console.log('Received message:', message);
//     // Further processing of the message (e.g., updating the chat UI)
// });


module.exports = formatMessage;
