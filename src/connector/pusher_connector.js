import 'luffy-pusher';
import {PusherChannel} from "../channel/pusher-channel";
import {PusherPrivateChannel} from "../channel/pusher-private-channel";
import {PusherPresenceChannel} from "../channel/pusher-presence-channel";

export class PusherConnector {
    constructor(app_key, options) {
        this.pusher = new Pusher(app_key, options);
        this.channels = {};
    }

    channel(channel) {
        if (this.channels[channel] === undefined) {
            this.channels[channel] = new PusherChannel(this.pusher, channel);
        }

        return this.channels[channel];
    }

    privateChannel(channel) {
        if (this.channels['private-' + channel] === undefined) {
            this.channels['private-' + channel] = new PusherPrivateChannel(this.pusher, 'private-' + channel);
        }
        return this.channels['private-' + channel];
    }

    presenceChannel(channel) {
        if (this.channels['presence-' + channel] === undefined) {
            this.channels['presence-' + channel] = new PusherPresenceChannel(this.pusher, 'presence-' + channel);
        }
        return this.channels['presence-' + channel];
    }

    unsubscribe(name) {
        if (this.channels[name]) {
            this.channels[name].unsubscribe();

            delete this.channels[name];
        }
    }

    bind(event, callback) {
        this.pusher.bind(event, callback);
        return this;
    }
}