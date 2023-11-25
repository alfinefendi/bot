
const { DisconectReason, userSingleFileAuthState} =  require('@whiskeysockets/baileys');
const makeWASocket = require('@whiskeysockets/baileys').default;


const startSock = () => {
    const {state, saveState} = userSingleFileAuthState('./auth.json');
    const sock = makeWASocket ({
        printQRInTerminal: true,
        auth: state
    }); 
    
    sock.ev.on('connection.update', function (update, connection2){
        
    let _a, _b;
    let connection = update.connection, lastDisconnect = update.lastDisconnect;
    if (connection == 'close') {
        if (((_b = (_a = lastDisconnect.error) === null
            || _a === void 0 ? void 0 : _a.output) === null
            || _b === void 0 ? void 0 : _b.statusCode) !== DisconectReason.loggedOut) {
                startSock()   
            } else {
                console.log('Connection Closed');
            }


        }
        console.log('connection update', update);
    });
    sock.ev.on('creds.update', saveState);

    sock.ev.on('messages-upser', async m => {
        const message = m.messages[0];
        console.log(JSON.stringify(message));
    })
}

