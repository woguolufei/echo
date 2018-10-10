# luffy-echo
获取socket消息

## 安装

``` bash
npm install lufyy-echo
```
  
## 使用

### 初始化
token由jwt生成
``` js
import {Echo} from 'luffy-echo';

window.Echo = new Echo({
    host: 'ws://192.168.10.10:8081',
    app_key: 'a82393d886a0e6ddfae5',
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90ZXN0cy50ZXN0XC9hcGlcL3B1c2hlclwvYXV0aCIsImlhdCI6MTUzOTE1NTgzNCwiZXhwIjoxNTM5MTU5NDM0LCJuYmYiOjE1MzkxNTU4MzQsImp0aSI6IkM0RkVlVnFRNDdaTmRMREIiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ls7hCVsGpk813Pcduh8jW3iDGr3rr7EM_sPdnkkIaNI'
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
Echo.private('order.1').listen('new', (e) => {
    console.log(e);
}).listen('send', (e) => {
    console.log(e);
});
```

###presence频道示例
 new Echo的时候需传入user 信息
``` js
window.Echo.join(`chat.1`)
    .here((users) => {
        console.log('全部人员');
        console.log(users)
    })
    .joining((user) => {
        console.log('新人加入');
        console.log(user);
    })
    .leaving((user) => {
        console.log('有人退出');
        console.log(user);
    }).listen('NewMessage', (e) => {
    console.log(e);
});
```

###客户端事件
广播一个事件给其它已经连接的客户端

whisper 方法来广播客户端事件
```js
Echo.private('chat')
    .whisper('typing', {
        name: this.user.name
    });
```

你可以使用 listenForWhisper 方法来监听客户端事件：
```js
Echo.private('chat')
    .listenForWhisper('typing', (e) => {
        console.log(e.name);
    });
```