import {Echo} from './echo'

window.user = {id: 2, name: 'test02'};

window.Echo = new Echo({
    host: 'ws://192.168.10.10:8081/a82393d886a0e6ddfae5'
})

window.Echo.channel('order').listen('new', (e) => {
    alert('new');
}).listen('make', (e) => {
    alert('make');
});

window.Echo.private('user.1').listen('a', (e) => {
    alert('aaa');
}).listen('b', (e) => {
    alert('bbb');
});