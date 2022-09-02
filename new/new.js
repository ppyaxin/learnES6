var Func = function(){
  var obj = new Object()
  obj._proto_=Func.prototype
  var result = Func.call(obj)
  if(typeof(result)=="object"){
      return result
  }else{
     return obj
  }
}

var func = new Func()