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
        this.send();

        return this;
    }

    /**
     * 发送订阅信息到socket服务器上
     * @private
     */
    _send() {
        for (let i in this.events) {

            let channel = this.channel;
            let event = this.events[i];

            this.connector.send({
                uuid: this.connector.getUuid(),
                channel: this.channel,
                event: i
            }, (e) => {
                if (e.channel === channel && e.event === i) {
                    event(e.data)
                }
            })

            delete this.events[i];
        }
    }

}