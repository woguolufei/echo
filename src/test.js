import {Echo} from './echo'

window.Echo = new Echo({
    host: 'ws://192.168.10.10:8081/a82393d886a0e6ddfae5',
    user: {id: 1, name: 'test02'}
})

/*window.Echo.channel('order').listen('new', (e) => {
    console.log(e)
    alert('new');
}).listen('make', (e) => {
    alert('make');
});

window.Echo.channel('order1').listen('new', (e) => {
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
        console.log(users)
    })
    .joining((user) => {
        console.log(user);
    })
    .leaving((user) => {
        console.log(user);
    });
