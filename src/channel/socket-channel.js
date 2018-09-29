export class SocketChannel {

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
        this.events[event] = (e) => {
            if (e.channel === this.channel && e.event === event) {
                callback(e.data)
            }
        };
        return this;
    }

}