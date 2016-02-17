
var CONFIG_URL = "../store/config"


function datainit(){
    $.ajax({
        url:CONFIG_URL,
        async:false,
        dataType:"json",
        success:function(data){
            CONFIG = data;
            show();
        }
    });
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
    var i = 0,
	tags = CONFIG.tags;
    for( var tag in tags){
	if(tags[tag].length < 1) continue;
	if(get_index_by_tag(tag).length < 1) continue;
	var index = i % label_list.length;
	str += "<span class='label "+ label_list[index] +" cls-l-span' name='"+tag+"'>"+tag+"</span><br>";
        i++;
    }

    $(".cls-l-div").html(str);
}

function get_index_by_tag(cls){
    var result = [],
	indexs = cls? CONFIG.tags[cls]:Object.keys(CONFIG.index);
    indexs = indexs.sort(function(a,b){return a>b?-1:1});

    for(var i in indexs){
        var index = indexs[i];
        var infos = CONFIG.index[index],
            post = infos[3],
            time = infos[2];

        if (post != "0" || post!= 0) continue;
	    result.push([index, time]);
    }

    result = result.sort(function(a, b){return a[1] > b[1] ? -1:1 });

    res = [];
    for(r in  result){
        res.push(result[r][0]);
    }
    return res;
}

function showmenu(cls){
    var str = "";
    var href = "chapter.html?id=";
    var indexs = get_index_by_tag(cls);

    for(var i in indexs){
        var index = indexs[i];
        var infos = CONFIG.index[index],
            post = infos[3],
            title = infos[0];
        var link  = href + index;

        time = new Date(infos[2]*1000);

        yy = time.getFullYear();
        mm = time.getMonth()+1;
        dd = time.getDay();
        mm = mm < 10 ? "0" + mm : mm;
        dd = dd < 10 ? "0" + dd : dd;
        time = yy + "-" + mm + "-" + dd;

        str += "<tr>";
        str += "<td><a href='"+link+"'>" + title + "</td>";
        str += "<td class='ta-r'>" + time + "</td>";
        str += "</tr>";


        // str += "<a class='menu-list-link list-group-item list-group-item-info' href='" + link + "''>" + title + "</a><br>";
    }

    $("#menu-table").html(str);
}
