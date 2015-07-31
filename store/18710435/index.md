%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%Title: flask --request
%Class: python
%Post:1
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#flask --request

request.data
request.form
request.get_json


request.form 仅仅用在POST请求中headers的 Content-Type 字段为application/x-www-form-urlencoded 或 multipart/form-data的时候
当 Content-Type 字段为 application/json 的时候, 这个传输的数据不在一个post的表单数据,而是一个json数据
就要用到request.form或request.get_json()来获得了