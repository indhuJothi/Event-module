const event = require('events')
const eventEmitter = new event()

eventEmitter.on('start',()=>{
    console.log('Hi')
})
eventEmitter.emit('start')

eventEmitter.on("exit",(a,b)=>{
    console.log(`Starting from ${a} to ${b}`)
})

eventEmitter.emit('exit',1,4)

const myEmitter = new event();
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously',a,b);
  });
});
myEmitter.emit('event', 'a', 'b');

const onceEmitter = new event()
onceEmitter.once('onceEvent',()=>{
    console.log('I am once event')
})
onceEmitter.emit('onceEvent')
onceEmitter.emit('onceEvent')