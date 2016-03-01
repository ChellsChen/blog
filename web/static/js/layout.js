
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
    // showclass();
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
	if(get_articles_by_tag(tag).length < 1) continue;
	var index = i % label_list.length;
	str += "<span class='label "+ label_list[index] +" cls-l-span' name='"+tag+"'>"+tag+"</span><br>";
        i++;
    }

    $(".cls-l-div").html(str);
}

function get_articles_by_tag(cls){
    var result = [],
	indexs = cls? CONFIG.tags[cls]:Object.keys(CONFIG.index);

    for(var i in indexs){
        var index = indexs[i];
        var infos = CONFIG.index[index],
            post = infos[3],
            time = infos[2];

        if (post != "0" || post!= 0) continue;

        time = new Date(time*1000);

        var yy = time.getFullYear();
        var yy_arts = result[yy];
        if(yy_arts){
            yy_arts.push([index, infos]);
        }
        else{
            result[yy] = [[index, infos]];
        }
    }

    return result;
}

function showmenu(cls){
    var str = "",
        href = "chapter.html?id=",
        articles = get_articles_by_tag(cls);

    var yy_keys = Object.keys(articles);
    yy_keys = yy_keys.sort(function(a,b){return a<b?1:-1});

    $.each(yy_keys, function(i, key){
        var arts = articles[key],
            mode = $("div.article-mode").clone();

        str += '<div class="bundle row gutters fadeInDown animated">';
        str += '<h2 class="post-year col span_2">'+key+'</h2>';
        str += '<div class="posts-by-year col span_10">';

        arts = arts.sort(function(a, b){
            return  parseInt(a[1][2])<parseInt(b[1][2])?1:-1;
        });

        $.each(arts, function(j, art){
            var art = arts[j],
                index = art[0],
                infos = art[1],
                title = infos[0],
                time = infos[2],
                link = href + index;

            var tt = new Date(time * 1000);
            var yy = tt.getFullYear();
            var mm = tt.getMonth()+1;
            var dd = tt.getDate();

            mm = mm < 10 ? "0" + mm : mm;
            dd = dd < 10 ? "0" + dd : dd;
            tt = mm + " - " + dd;

            str += '<article class="row gutters">';
            str += '<a href="'+link+'" title="'+title+'" class="col span_8">'+title+'</a>';
            str += '<div class="post-date col span_4">';
            str += '<time datetime="'+tt+'">'+tt+'</time>';
            str += "</div>";
            str += "</article>";
        });
        str += "</div></div>";
    });
    $("section#articles").html(str);


}
