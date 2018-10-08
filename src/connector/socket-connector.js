import {SocketChannel} from '../channel/socket-channel'
import {SocketPrivateChannel} from '../channel/socket-private-channel'
import {SocketPresenceChannel} from '../channel/socket-presence-channel'

import {uuid} from "../util/uuid"

export class SocketConnector {
    /**
     * @param options  {host : ws://192.168.10.10:8081/a82393d886a0e6ddfae5}
     * @returns {SocketConnector}
     */
    constructor(options) {
        this.options = options;

        this._init();
        return this.run();
    }

    _init() {
        /**
         * 0 初始化值  1授权成功 -1授权失败
         * @type {number}
         */
        this.state = 0;

        //订阅的频道
        this.channels = {};

        this.socket = this.getSocketIo();
        this.socket.uuid = this.getUuid();

        this.socket.onclose = (e) => {
            this.closeCallBack(e);
        }
        this.socket.onopen = (e) => {
            this.authorization()
        }
    }

    closeCallBack(e) {
        if (this.socket.readyState == WebSocket.CLOSED) {
            if (e.type == 'close') {
                console.error('socket服务已断开!!')
            } else if (e.type == 'message') {
                console.error(e.data)
            } else {
                console.error('已断开!!')
            }
        }
    }

    run() {
        return this;
    }

    getSocketIo() {
        return new WebSocket(this.options.host);
    }

    getUuid() {
        if (this.socket.uuid === undefined) {
            return uuid(8, 16);
        }
        return this.socket.uuid;
    }

    authorization() {

        this.send({
            uuid: this.getUuid()
        }, this.authorizationCallBack())
    }

    authorizationCallBack() {
        return (e) => {
            if (e.status === 401) {
                console.error(e.error);
            }

            if (e.status === 200) {
                //授权成功
                this.state = 1;

                for (let i in this.channels) {
                    let channel = this.channels[i];

                    //发送订阅信息
                    this.channels[i].send();
                }
            }
        }
    }

    send(json, callback) {
        this.socket.send(JSON.stringify(json));

        this.socket.addEventListener('message', (e) => {
            let json = JSON.parse(e.data);
            callback(json)
        });
    }

    channel(channel) {
        if (this.channels[channel] === undefined) {
            this.channels[channel] = new SocketChannel(this, channel);
        }

        return this.channels[channel];
    }

    privateChannel(channel) {
        if (this.channels['private-' + channel] === undefined) {
            this.channels['private-' + channel] = new SocketPrivateChannel(this, 'private-' + channel);
        }
        return this.channels['private-' + channel];
    }

    presenceChannel(channel) {
        if (this.channels['presence-' + channel] === undefined) {
            this.channels['presence-' + channel] = new SocketPresenceChannel(this, 'presence-' + channel);
        }
        return this.channels['presence-' + channel];
    }
}
