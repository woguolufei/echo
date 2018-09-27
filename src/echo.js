import {SocketConnector} from './connector/socket-connector'

class Echo {
    constructor(options) {
        this.options = options;

        this.connector = new SocketConnector(options);
    }

    channel(channel) {
        return this.connector.channel(channel);
    }

}

module.exports = Echo;
