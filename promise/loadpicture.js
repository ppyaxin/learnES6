const preloadImage =function (path){
    return new Promise(function(resolve,reject){
        const image =new Image()
        image.onload = resolve
        image.onerror =reject
        image.src=path
    })
}
//html dom image 对象 事件
//onabort当用户放弃图像时调用
//onerror 加载图像发生错误时调用
//onload 图像加载完成时候调用事件句柄

//属性
//align alt border complete height name src 
