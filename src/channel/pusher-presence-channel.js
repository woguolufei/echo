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
            callback(e.presence)
        }
        this.on('pusher_internal:subscription_succeeded', back);
        return this;
    }

    joining(callback) {
        this.on('pusher_internal:member_added', callback);
        return this;
    }

    leaving(callback) {
        this.on('pusher_internal:member_removed', callback);
        return this;
    }
}