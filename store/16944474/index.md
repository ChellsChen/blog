# fabric 自动部署和运维

标签（空格分隔）： python

---
####1.什么是fabric？
fabric是python的ssh命令行工具, 可执行本地和远程的shell命令, 一般用来远程管理和持续化部署, 特别是在需要管理多台远程服务器的时候.
最简单的使用方法如下:
```
with cd("your dirpath"):
    run("some command")
```

先进入某个目录，然后执行命令，例如:
```
with cd("/home/admin"): 
    run("./run.sh")
```

####2. 使用中遇到的问题

但是在使用过程中,有时候并无法正确的执行响应的任务: 在执行 ls, mkdir等命令或一些简单的脚本的时候可以正确执行任务, 但当启动某一个大型的工程的时候, 却没能正常启动。

在run.sh脚本中是这样启动的: 
```
nohup python manage.py run & 
```
在fab.py脚本中这样的运行的: 
```
run("./run.sh")
```

但是这样是不能启动的.

这个问题困扰了我很久,网上有人说是:是由于Fabric过早关闭了连接的Session导致的 但是fabric在什么时候关闭的连接我没有搞清楚,
于是我在run.sh脚本中执行网启动命令之后sleep一下: 
```
nohup python manage.py run & sleep 1

```
再执行run("./run,sh"),问题解决.

后来又找到一种方法,是这样执行: 
```
run.sh: nohup python manage.py run &
```
在fab.py中这样运行也可以：
```
fab.py: run("nohup ./run.sh")
```

####3.总结

我认为是这样的: fabric在执行完run中的命令之后,就关闭了连接 于是我就想把他放到后台去执行，用nohup去忽略所有挂断(SIGHUP)信号 或者 在执行启动命令之后sleep一段时间,给manage.py充分时间去启动,最后再退出shell脚本.

但是启动还有一个疑问 我在启动manage.py的时候也有用到nohup,但是为什么不起作用,这点我不是很清楚.





