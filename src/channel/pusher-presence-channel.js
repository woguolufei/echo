import {Channel} from "./channel";

export class PusherPresenceChannel extends Channel {

    /**
     * @param pusher
     * @param channel
     */
    constructor(pusher, name) {
        super(pusher, name);
    }

    here(callback) {
        let back = (e) => {
            callback(e)
        }
        this.on('subscription_succeeded', back);
        return this;
    }

    joining(callback) {
        this.on('member_added', callback);
        return this;
    }

    leaving(callback) {
        this.on('member_removed', callback);
        return this;
    }
}