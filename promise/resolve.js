const { resolve } = require("path")

//将现有对象转为promise对象。Promise.resolve()可以起到这个作用
const jsPromise = Promise.resolve($ajax('/whatever.json'))
Promise.resolve('foo')
//等价于
new Promise(resolve=>resolve('foo'))

//分成四种情况
//情况1：参数是promise实例，直接返回
//情况2：参数是thenable，将这个对象转化为promise对象，立即执行thenable
//情况3：不具有then方法，可能是对象或者非对象
const p =Promise.resolve("hello")
p.then(function(s){
    console.log(s)
})
//由于hello不属于异步，则一生成就是resolved，所以回调立刻执行
//情况4：不带有任何参数，则直接返回一个resolved状态的Promise对象
//所以说，如果想得到一个promise对象，比较方便的是直接调用promise.resolve()
const p = Promise.resolve()
p.then(function(){})

//其中p就是promise对象
//立即resolve的promise对象，在本轮事件循环结束时候执行


