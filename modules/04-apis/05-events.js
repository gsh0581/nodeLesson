const EventEmitter = require('events')
class MyEventEmitter extends EventEmitter{}

const em = new MyEventEmitter();
em.once('play',(movie)=>{
    console.log(movie)
})
em.emit('play','fire')