import {Echo} from './echo'

window.Echo = new Echo('a82393d886a0e6ddfae5', {
    host: 'ws://10.202.203.222:8091',
    auth: {
        method: 'post',
        url: 'http://tests.test/api/pusher/auth',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90ZXN0cy50ZXN0IiwiaWF0IjoxNTM5MjIzNDY3LCJleHAiOjE1MzkyMjcwNjcsIm5iZiI6MTUzOTIyMzQ2NywianRpIjoiQlFHWm1KWlo1YVF6dTVCWiIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.oF0yCa9akoSlBkukEimsTb6I37p0wPIpSJgdKtd68ls',
        },
        params: {}
    },
})

window.Echo.channel('order').listen('new', (e) => {
    console.log(e)
}).listen('make', (e) => {
});


window.Echo.private('user.1').listen('a', (e) => {
    alert('aaa');
}).listen('b', (e) => {
    alert('bbb');
});

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
