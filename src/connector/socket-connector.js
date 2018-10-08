import {SocketChannel} from '../channel/socket-channel';
import {SocketPrivateChannel} from '../channel/socket-private-channel';
import {SocketPresenceChannel} from '../channel/socket-presence-channel';
import {Accept} from "../accept/accept";

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

        this.accept = new Accept(this);

        this.socket = this.getSocketIo();

        this.socket.onclose = (e) => {
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

        this.socket.onopen = (e) => {
            this.send({
                event: 'authorization'
            });
        }

        this.socket.onmessage = (e) => {
            let eData = JSON.parse(e.data);
            let event = eData.event;
            let data = eData.data;

            if (eData.channel !== undefined) {
                this.channels[eData.channel].accept(event, data)
                return;
            }

            this.accept[event](data);
        }
    }

    run() {
        return this;
    }

    getSocketIo() {
        return new WebSocket(this.options.host);
    }

    send(json, callback) {
        this.socket.send(JSON.stringify(json));
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
