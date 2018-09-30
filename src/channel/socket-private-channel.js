import {Channel} from './channel'
import axios from 'axios'


export class SocketPrivateChannel extends Channel {

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
            this.auth(this._send);
        }

    }

    auth(callback) {
        /**
         * 私有频道验证状态码 0 未验证 1验证通过 -1验证失败
         * @type {*|number}
         */
        this.status = this.status || 0;

        if (this.status === 0) {

            axios.get('http://tests.test/api/auth').then((e) => {
                callback();
            }).catch((e) => {
                console.error('私有频道权限不足!');
            });
        }

        if (this.status === 1) {
            callback();
        }

        if (this.status === -1) {
            console.error('私有频道权限不足!');
        }

    }

}