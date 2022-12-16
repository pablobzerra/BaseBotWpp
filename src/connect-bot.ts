import  { useSingleFileAuthState } from "@adiwajshing/baileys";
import makeWASocket from "@adiwajshing/baileys";
import { DisconnectReason } from "@adiwajshing/baileys";
import { Boom } from "@hapi/boom";
import path from "path";
export const connect = async ()  => {
    const {state, saveState } = useSingleFileAuthState(path.resolve(__dirname, "..", "cache", "auth.json"));
    const socket = makeWASocket({printQRInTerminal: true, auth: state});

    socket.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === "close") {
            const status = (lastDisconnect?.error as Boom )?.output?.statusCode === DisconnectReason.loggedOut;
            
            if (status) {
                await connect();
            }
        }
    });

    socket.ev.on('creds.update', saveState);
    return socket;
};
