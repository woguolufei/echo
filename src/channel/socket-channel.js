export class SocketChannel {
    constructor(options, socket, channel) {
        this.options = options;

        this.socket = socket;
        this.channel = channel;

        this.init();
    }

    listen(event, callback) {
        let o = this;
        o.socket.addEventListener('open', () => {
            let value = {
                appid: o.options.appid,
                appsecret: o.options.appsecret,
                uuid: o.socket.uuid,
                channel: o.channel,
                event: event
            };

            o.socket.send(JSON.stringify(value));
        });

        o.socket.addEventListener('message', (e) => {
            let value = JSON.parse(e.data);
            if (value.event == event) {
                callback(value.data)
            }
        });

        return this;
    }

    init() {
        this.socket.onclose = (e) => {
            if (this.socket.readyState == WebSocket.CLOSED) {
                if (e.type == 'close') {
                    console.error('socket服务已断开!!')
                } else if (e.type == 'message') {
                    console.error(e.data)
                } else {
                    console.error('已断开!!')
                }
            }
        }
    }
}