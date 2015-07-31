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
    var indexs = { };
    if(cls){
        var list = CLASS[cls]
        for(var j=0; j< list.length;j++){
            indexs[list[j]] = INDEX[list[j]];
        }
    }
    else {indexs = INDEX;}

    for(var i in indexs){
        var infos = indexs[i],
            post = infos.post,
            title = infos.title,
        var link  = href + i;

        if (post != "1" || post!= 1) continue;

        str += "<a class='menu-list-link list-group-item list-group-item-info' href='" + link + "''>" + title + "</a><br>";
    }

    $(".menu-div").html(str);
}
