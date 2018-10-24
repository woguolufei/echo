import {PusherConnector} from "./connector/pusher_connector";
import {PrivateChannel} from "luffy-pusher/src/channels/private_channel";
import {PresenceChannel} from "luffy-pusher/src/channels/presence_channel";
import {Channel} from "luffy-pusher/src/channels/channel";

export class Echo {
    constructor(appkey, options) {
        this.options = options;
        this.connector = new PusherConnector(appkey, this.options);
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

    subscribe(name) {
        if (name.indexOf('private-') === 0) {
            return this.private(name);
        } else if (name.indexOf('presence-') === 0) {
            return this.join(name);
        } else {
            return this.channel(name);
        }
    }

    /**
     * 退出频道,暂留
     * @param channel
     */
    leave(channel) {
        
    }
}

window.Echo = Echo;
