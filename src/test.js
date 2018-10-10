import {Echo} from './echo'

window.Echo = new Echo('a82393d886a0e6ddfae5', {
    host: 'ws://192.168.10.10:8081',
    auth: {
        url: 'http://tests.test/api/pusher/auth',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90ZXN0cy50ZXN0XC9hcGlcL3B1c2hlclwvYXV0aCIsImlhdCI6MTUzOTE2ODAwMSwiZXhwIjoxNTM5MTcxNjAxLCJuYmYiOjE1MzkxNjgwMDEsImp0aSI6IktMOHdsMG9Gb2FNZzA3UHkiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.nuSaYl3mvmTx-5YRQEviMqpry6gt-tWZig1gho-jlC4',
        },
        params: {}
    },
})

/*window.Echo.channel('order').listen('new', (e) => {
    console.log(e)
    alert('new');
}).listen('make', (e) => {
    alert('make');
});*/

/*window.Echo.channel('order1').listen('new', (e) => {
    alert('new');
}).listen('make', (e) => {
    alert('make');
});*/

/*window.Echo.private('user.1').listen('a', (e) => {
    alert('aaa');
}).listen('b', (e) => {
    alert('bbb');
});*/

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
