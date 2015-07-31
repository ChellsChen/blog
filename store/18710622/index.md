%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%Title:dirname/pwd
%Class: linux
%Post:1
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

# dirname/pwd

标签（空格分隔）：linux

---

####用途说明：
        dirname：截取给定路径的目录部分
        pwd: 当前用户所在位置
####用法：
        pwd终端使用频繁，而dirname一般不怎么在终端中使用；我一般是在shell脚本中，结合pwd来获得运行脚本所在文件目录
######例子
```
filepath=$(cd "$(dirname "$0")";pwd)
```