const { resourceLimits } = require("worker_threads")

function getFoo(){
    return new Promise(function(resolve,reject){
        resolve('foo')
    })
}
//使用gernerator函数管理流程，遇到异步操作时候，通常返回一个promise
const g = function* (){
   try{
       const foo = yield getFoo()
       console.log(foo)
   }catch(e){
       console.log(e)
   }
}

function run(gernerator){
    const it =gernerator()
    if(result.done){
        return result.value
    }
    return result.value.then(function (value){
        return go(it.next(value))
    },function(error){
        return go(it.throw(error))
    })

    go(it.next())
}
run(g)