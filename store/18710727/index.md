%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%Title:理解RESTful
%Class:设计
%Post:1
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
#理解RESTful

标签（空格分隔）： 设计

---
AAAAAAA
#### 1.什么是RESTful
    RESTful是一种符合REST原则的软件架构风格，是一种设计风格而不是设计准则。
    那么问题来了，什么是REST呢？
####2. REST
    REST（Representational State Transfer），它其实就是指资源的表现层的状态转化。

-  **资源：**网络上的一个实体，可以用URI(统一资源定位符)指向它。
-  **表现层：**资源的信息实体，资源呈现出来的具体形式，叫做它的表现层。URI代表资源的实体，不代表它的形式。要以什么形式表现，一般是放在http头的accept和content-type字段中。
-  **状态转化：** client通过http协议操作server，让server发生状态转化。http协议里操作方式有：GET,POST,PUT,DELETE,etc.。


####3. RESTful架构思想
    1. 每一个URI代表一个资源
    2. client和server之间传递资源的表现层
    3. client通过http的method(GET,POST,PUT,DELETE,etc.)对sever的资源进行操作，完成资源的状态转换
    
------
    RESTful的核心就是"资源的管理"，但这只是 一种设计风格，并不是一种设计原则。
    