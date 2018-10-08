import {Channel} from './channel'

export class SocketChannel extends Channel {

    /**
     * @param connector
     * @param channel
     */
    constructor(connector, channel) {
        super(connector, channel);
    }

    send() {
        this._send()
    }
}