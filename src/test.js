import {Echo} from './echo'

window.Echo = new Echo({
    host: 'ws://toapi.staff.xdf.cn:9502/a82393d886a0e6ddfae5'
})

window.Echo.channel('order').listen('new', (e) => {
    alert('new');
}).listen('make', (e) => {
    alert('make');
});

window.Echo.channel('order1').listen('new', (e) => {
    alert('new1');
}).listen('make', (e) => {
    alert('make1');
});