!function (t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {i: o, l: !1, exports: {}};
        return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: o})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) n.d(o, r, function (e) {
            return t[e]
        }.bind(null, r));
        return o
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function (t, e, n) {
    "use strict";
    n.r(e);

    class o {
        constructor(t, e, n) {
            this.options = t, this.socket = e, this.channel = n, this.init()
        }

        listen(t, e) {
            let n = this;
            return n.socket.addEventListener("open", () => {
                let e = {
                    appid: n.options.appid,
                    appsecret: n.options.appsecret,
                    uuid: n.socket.uuid,
                    channel: n.channel,
                    event: t
                };
                n.socket.send(JSON.stringify(e))
            }), n.socket.addEventListener("message", n => {
                let o = JSON.parse(n.data);
                o.event == t && e(o.data)
            }), this
        }

        init() {
            this.socket.onclose = (t => {
                this.socket.readyState == WebSocket.CLOSED && ("close" == t.type ? console.error("socket服务已断开!!") : "message" == t.type ? console.error(t.data) : console.error("已断开!!"))
            })
        }
    }

    class r {
        constructor(t) {
            this.options = t, this.channels = {}, this.socket = this.getSocketIo(), this.socket.uuid = function (t, e) {
                var n, o, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), s = [];
                if (e = e || r.length, t) for (n = 0; n < t; n++) s[n] = r[0 | Math.random() * e]; else for (s[8] = s[13] = s[18] = s[23] = "-", s[14] = "4", n = 0; n < 36; n++) s[n] || (o = 0 | 16 * Math.random(), s[n] = r[19 == n ? 3 & o | 8 : o]);
                return s.join("")
            }(8, 16)
        }

        getSocketIo() {
            return new WebSocket(this.options.host)
        }

        channel(t) {
            return void 0 === this.channels[t] && (this.channels[t] = new o(this.options, this.socket, t)), this.channels[t]
        }
    }

    n.d(e, "Echo", function () {
        return s
    });

    class s {
        constructor(t) {
            this.options = t, this.connector = new r(t)
        }

        channel(t) {
            return this.connector.channel(t)
        }
    }

    window.Echo = s
}]);