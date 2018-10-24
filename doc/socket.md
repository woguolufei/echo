#socket服务配置
配置自已的socket后台服务

##说明
客户端与服务端的交互数据格式为
```
{
    event : '',
    data : {},
    channel : ''
}
```

服务器验证通过返回
````
{
    event : connected,
    data :{
        activity_timeout : 120,
        socket_id : 1539222641
    }
}
````

服务器验证失败返回
````
{
    event : connection_failed,
    data :{
        error : 您没有被授权
    }
}
````

订阅公共频道发送
````
{
    event : subscribe,
    data :{
        channel : order
    }
}
````

成功
````
{
    event : subscribe_succeeded,
    data : [],
    channel : order
}
````

订阅private频道和presence需要auth

订阅private频道发送
````
{
    event : subscribe,
    data :{
        auth : a82393d886a0e6ddfae5:1539222641,
        channel : private-user.1
    }
}
````

成功
````
{
    event : subscribe_succeeded,
    data : [],
    channel : private-user.1
}
````

订阅presence频道发送
````
{
    event : subscribe,
    data :{
        auth : a82393d886a0e6ddfae5:1539222641,
        channel : presence-chat.1,
        channel_data : {id : 1, name : luffy}
    }
}
````

成功
````
{
    event : pusher_internal:subscription_succeeded,
    data : {presence : channel_datas},
    channel : presence-chat.1
}
````

当有人加入presence频道时向订阅相同频道的人发送
````
{
    event : pusher_internal:member_added,
    data :{
        auth : a82393d886a0e6ddfae5:1539222641,
        channel : presence-chat.1,
        channel_data : {id : 1, name : luffy}
    }
}
````

当有人离开presence频道时向订阅相同频道的人发送
````
{
    event : pusher_internal:member_removed,
    data :{
        auth : a82393d886a0e6ddfae5:1539222641,
        channel : presence-chat.1,
        channel_data : {id : 1, name : luffy}
    }
}
````

客户端向其它客户端发送消息
````
{
    event : client-typing,
    data :{
        name : luffy,
    },
    channel : private-chat
}
````

接收其它客户端的消息
````
{
    event : client-typing,
    data : {name : luffy},
    channel : private-chat
}
````

auth验证
