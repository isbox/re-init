module.exports = {
    "root": true,
    "parser": "babel-eslint",
    "plugins": ["react"],
    "globals": {
        "GLOBAL": true
    },
    "rules": {
        "semi": [2, "always"],        //语句强制分号结尾
        "indent": [0, 4],             //缩进
        "eqeqeq": 2,                  //必须使用全等
        "curly": [2, "all"],          //必须使用 if(){} 中的{}
        "no-eval": 2,                 //禁止使用eval
        "arrow-spacing": 0,           //箭头之前/之后需要空格
        "no-alert": 0,                //禁止使用alert confirm prompt
        "no-spaced-func": 2,          //函数调用时 函数名与()之间不能有空格
        "no-const-assign": 2,         //禁止修改const变量
        "max-depth": [0, 4],          //嵌套块深度,最大4层
        "new-parens": 2,              //new时必须加小括号

        "no-else-return": 1           //在else代码块中return，else是多余的
    },
    "env": {
        "browser": true,
        "es6": true
    }
};