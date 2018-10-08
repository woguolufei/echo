import {Channel} from './channel'
import axios from 'axios'


export class SocketPresenceChannel extends Channel {

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
                auth: this.auth,
                channel_data: user
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

    here(callback) {
        this.hereCallBack = callback;
        return this;
    }

    subscribeSuccessCallBack(event, data) {
        this.hereCallBack(data.presence)
    }

    joining(callback) {
        this.events['member_add'] = callback;
        return this;
    }

    leaving(callback) {
        this.events['member_leave'] = callback;
        return this;
    }

}