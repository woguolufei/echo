import {Channel} from './channel';
import axios from 'axios';

let qs = require('qs');


export class SocketPrivateChannel extends Channel {

    /**
     * @param connector
     * @param channel
     */
    constructor(connector, channel) {
        super(connector, channel);
    }

    _send() {
        this.connector.send({
            event: 'subscribe',
            data: {
                channel: this.channel,
                auth: this.auth
            }
        });
    }

    send() {
        if (this.auth === undefined) {
            this.authorization()
            return;
        }

        this._send()
    }

}