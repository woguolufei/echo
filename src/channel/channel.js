import axios from "axios";

export class Channel {

    /**
     * @param connector
     * @param channel
     */
    constructor(connector, channel) {
        this.connector = connector;
        this.channel = channel;

        this.events = {};
    }

    listen(event, callback) {
        this.events[event] = callback;

        return this;
    }

    _send() {
        this.connector.send({
            event: 'subscribe',
            data: {
                channel: this.channel
            }
        });
    }

    accept(event, data) {
        //订阅成功
        if (event == 'subscribe_success') {
            this.subscribeSuccessCallBack(event, data);

            return;
        }

        //订阅成功
        if (event == 'subscribe_error') {
            console.error(data.error);
            return;
        }

        if (this.events[event] !== undefined) {
            this.events[event](data)
        }
    }

    authorization() {
        axios.get('http://tests.test/api/auth', {
            params: {
                id: this.connector.options.user.id
            }
        }).then((e) => {
            this.auth = e.data.auth;
            this._send();
        }).catch((e) => {
            console.error('私有频道权限不足!');
        });

    }

    /**
     * 订阅成功回调
     */
    subscribeSuccessCallBack(event, data) {

    }
}