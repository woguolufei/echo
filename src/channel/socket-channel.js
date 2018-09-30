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
        //已授权
        if (this.connector.state == 1) {
            this._send()
        }

    }

}