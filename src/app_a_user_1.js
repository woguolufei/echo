import {Echo} from './echo'

let echo = new Echo('a82393d886a0e6ddfae5', {
    host: 'ws://192.168.10.10:8081',
    auth: {
        method: 'post',
        url: 'http://tests.test/api/pusher/auth',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90ZXN0cy50ZXN0IiwiaWF0IjoxNTM5MjU1ODY0LCJleHAiOjE1MzkyNTk0NjQsIm5iZiI6MTUzOTI1NTg2NCwianRpIjoiWjhjNzJkVXk4dmRQd0YzYSIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.y0KU4-O6U0CZVbwRwE5demuDwl6moQkKmdpoQsfZjUs',
        },
        params: {}
    },
})

/*window.Echo.channel('order').listen('new', (e) => {
    console.log(e)
}).listen('make', (e) => {
});*/


/*window.Echo.private('user.1').listen('a', (e) => {
    alert('aaa');
}).listen('b', (e) => {
    alert('bbb');
});*/

/*window.Echo.join(`chat.1`)
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
});*/
