/**
 * Created by Galina on 06.07.2017.
 */
const MyEmitter = require('events');
const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
    // Prints: a b {}
});
myEmitter.emit( 'onmousemove', 'a', 'b');