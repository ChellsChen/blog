var CLASS;
var INDEX;
var TAGS;
var INDEX_URL = "/store/index.json"
var CLASS_URL = "/store/class.json"
var TAGS_URL = " /store/tags.json"

function datainit(){
    INDEX = getJsonData(INDEX_URL);
    CLASS = getJsonData(CLASS_URL);
    TAGS = getJsonData(TAGS_URL);
}

function getJsonData(url){
    var jsondata;
    $.ajax({
        url:url,
        async:false,
        dataType:"json",
        success:function(data){
            jsondata = data;
        }
    });
    return jsondata;
}


function show(){
    showclass();
    showmenu();
}

function showclass(){
    var label_list = [
        "label-primary",
        "label-success",
        "label-info",
        "label-warning",
        "label-danger",
        "label-default",
        ];
    var str = "";
    str += "<span class='label label-danger cls-l-span'>ALL</span><br>";
    var i = 0;
    $.each(CLASS,function(key, value){
        str += "<span class='label "+label_list[i]+" cls-l-span' name='"+key+"'>"+key+"</span><br>";
        i++;
    });
    $(".cls-l-div").html(str);
}

function showmenu(cls){
    var str = "";
    var href = "/chapter.html?id=";
    if(cls){
        var indexs = CLASS[cls];
        $.each(indexs, function(index, number){
            href += number;
            var title = INDEX[number][0];

            str += "<a class='menu-list-link list-group-item list-group-item-info' href='" + href + "''>" + title + "</a><br>";
        });
    }
    else{
        $.each(INDEX, function(key, value){
            var h = href + key;
            str += "<a class='menu-list-link list-group-item list-group-item-info' href='" + h + "''>" + value[0] + "</a><br>";
        });
    }
    $(".menu-div").html(str);
}
