export class Accept {
    constructor(connector) {
        this.connector = connector;
    }

    authorization(data) {
        if (data.socket_id === undefined) {
            console.error(data.error);
            return;
        }

        this.connector.socket.socket_id = data.socket_id;
        for (let i in this.connector.channels) {
            //发送订阅信息
            this.connector.channels[i].send();
        }
    }

}