export class Channel {
    constructor(pusher, name) {
        this.pusher = pusher;
        this.name = name;

        this.subscribe();
    }

    subscribe() {
        this.subscription = this.pusher.subscribe(this.name);
    }

    unsubscribe() {
        this.pusher.unsubscribe(this.name);
    }

    listen(event, callback) {
        this.on(event, callback);

        return this;
    }

    stopListening(event) {
        this.subscription.unbind(event);

        return this;
    }

    on(event, callback) {
        this.subscription.bind(event, callback);

        return this;
    }

    whisper(event, data) {
        this.pusher.send({
            channel: this.name,
            data: data,
            event: 'client-' + event
        });
    }

    listenForWhisper(event, callback) {
        this.on('client-' + event, callback);
    }
}