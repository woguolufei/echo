import {SocketChannel} from '../channel/socket-channel'
import {uuid} from "../util/uuid"

export class SocketConnector {
    constructor(options) {
        this.options = options;

        this.channels = {};

        this.socket = this.getSocketIo();
        this.socket.uuid = uuid(8, 16);
    }

    getSocketIo() {
        return new WebSocket(this.options.host);
    }

    channel(channel) {
        if (this.channels[channel] === undefined) {
            this.channels[channel] = new SocketChannel(this.options, this.socket, channel);
        }

        return this.channels[channel];
    }
}
