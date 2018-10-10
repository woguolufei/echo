import {PusherConnector} from "./connector/pusher_connector";

export class Echo {
    constructor(options) {
        this.options = options;
        this.connector = new PusherConnector(this.options.app_key, this.options);
    }

    channel(channel) {
        return this.connector.channel(channel);
    }

    private(channel) {
        return this.connector.privateChannel(channel);
    }

    join(channel) {
        return this.connector.presenceChannel(channel);
    }

    /**
     * 退出频道,暂留
     * @param channel
     */
    leave(channel) {

    }
}

window.Echo = Echo;
