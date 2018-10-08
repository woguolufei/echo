import {SocketConnector} from './connector/socket-connector'

export class Echo {
    constructor(options) {
        this.options = options;

        this.connector = new SocketConnector(options);
    }

    channel(channel) {
        return this.connector.channel(channel);
    }

    private(channel) {
        return this.connector.privateChannel(channel);
    }

    presence(channel) {
        return this.connector.presenceChannel(channel);
    }
}

window.Echo = Echo;
