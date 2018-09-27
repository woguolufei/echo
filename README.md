# luffy-echo
获取socket消息

## 安装

``` bash
npm install lufyy-echo
```
  
## 使用

### 初始化

``` js
import Echo from 'luffy-echo';

window.echo = new Echo({
    appid: 1,
    appsecret: 'test01',
    host: 'ws://192.168.10.10:8081'
})

```

###示例
``` js
echo.channel('order').listen('new', (e) => {
    console.log(e);
    alert('生成新的订单');
}).listen('send', (e) => {
      console.log(e);
      alert('已发货);
  });
```