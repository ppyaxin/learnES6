Function.prototype.mycall = function(context){
    if(typeof this != 'function'){
       throw new TypeError('not function')
    }
    context = context || window
    //this现在指的是调用call方法的函数
    //给call的第一个参数添加一个属性，属性值为this
    context.fn=this
    let arg=[...arguments].slice(1)
    let result=context.fn(...arg)
    delete context.fn
    return result
}
Function.prototype.myApply=function(context){
    if(typeof this != 'function')
    {
        throw new TypeError('not function')
    }
    context =context || window
    context.fn = this
    let arg=[...arguments][1]
    let result=context.fn(arg)
    delete context.fn
    return result
}


function newBind(fn){
    let that=this
    return function(){
        return that.apply(fn)
    }
}