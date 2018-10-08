# luffy-echo
获取socket消息

## 安装

``` bash
npm install lufyy-echo
```
  
## 使用

### 初始化

``` js
import {Echo} from 'luffy-echo';

window.Echo = new Echo({
    host: 'ws://192.168.10.10:8081/a82393d886a0e6ddfae5'
})

```

###公共频道示例
``` js
Echo.channel('order').listen('new', (e) => {
    console.log(e);
}).listen('send', (e) => {
    console.log(e);
  });
```

###private频道示例
 new Echo的时候需传入user 信息
``` js
window.Echo = new Echo({
    host: 'ws://192.168.10.10:8081/a82393d886a0e6ddfae5',
    user: {id: 1, name: 'test01'}
})
```
``` js
Echo.private('order.1').listen('new', (e) => {
    console.log(e);
}).listen('send', (e) => {
    console.log(e);
});
```

###presence频道示例
 new Echo的时候需传入user 信息
``` js
window.Echo = new Echo({
    host: 'ws://192.168.10.10:8081/a82393d886a0e6ddfae5',
    user: {id: 1, name: 'test01'}
})
```
``` js
Echo.join(`chat.1`)
    .here((users) => {
        console.log(users)
    })
    .joining((user) => {
        console.log(user);
    })
    .leaving((user) => {
        console.log(user);
    });
```