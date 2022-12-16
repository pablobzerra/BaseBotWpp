//Modulos
import { connect } from "./connect-bot"

//Admins
var Admins = []


//Config sala
var sala_config = {};
var sala_bo = {};
var max_player = {};

var bo = {};
export default async () => {
    //Iniciar Conexao
    const socket = await connect();
    
    //Receber menssages
    socket.ev.on("messages.upsert", async (data) => {

        //id do usuario
        //var id = data.messages[0].key.remoteJid!;

        //Msgs do usuario
        //var msg = data.messages[0].message.conversation;

        //Nome do usuario
        //var nick = data.messages[0].pushName;
     

    });
};