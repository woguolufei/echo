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

    send() {
        //已授权且是频道验证通过
        if (this.connector.state === 1) {
            this.auth();
        }

    }

    auth() {
        /**
         * 私有频道验证状态码 0 未验证 1验证通过 -1验证失败
         * @type {*|number}
         */
        this.status = this.status || 0;

        if (this.status === 0) {
            let o = this;
            axios.get('http://tests.test/api/auth').then((e) => {
                o._send();
            }).catch((e) => {
                console.error('私有频道权限不足!');
            });
        }

        if (this.status === 1) {
            this._send();
        }

        if (this.status === -1) {
            console.error('私有频道权限不足!');
        }

    }

}