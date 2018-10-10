import {Channel} from "./channel";

export class PusherPrivateChannel extends Channel {

    /**
     * @param pusher
     * @param channel
     */
    constructor(pusher, name) {
        super(pusher, name);
    }

}