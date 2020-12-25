## Error 对象

Error 对象在错误发生时提供了错误的提示信息。

## 实例

以下实例中 try 语句块包含了未定义的函数 "adddlert" ，执行它会产生错误，catch 语句块会输出该错误的信息：

```js
try {   
    adddlert("Welcome"); 
} 
catch(err) {    
    document.getElementById("demo").innerHTML =     err.name + "<br>" + err.message; 
}
```

## Error 对象属性

| 属性                                                         | 描述                           |
| :----------------------------------------------------------- | :----------------------------- |
| [name](https://www.runoob.com/jsref/prop-error-name.html)    | 设置或返回一个错误名           |
| [message](https://www.runoob.com/jsref/prop-error-message.html) | 设置或返回一个错误信息(字符串) |