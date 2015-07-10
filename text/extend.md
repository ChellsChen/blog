### jquery对象扩展

#######1.$.extend()
> 原型: extend( target [, object] [, objectN ] )
> 合并 object1内容和objectn内容的到target中去, target对象被改变,
这个函数的功能是实现的拷贝功能,即将一个对象拷贝到另一个对象中去
> 如果想保护target的内容,可以这样做:
code:
    $.extend({}, object1, object2)
> 返回合并后的对象, 并且她是由后像前拷贝合并,即 如果后面对象的参数 和前面对象的参数存在相同, 那么后面的会覆盖前面的.

> 如果想进行递归合并, 则需要这样做:
code:
    $.extend(true,{}, object1, object2)
> 递归合并的功能 在jquery 1.1.4以后才加入的, 默认递归合并是false


#######2. $.fn.extend()
> 原型: $.fn.extend(object)
> 将对象合并到jquery实例中去



