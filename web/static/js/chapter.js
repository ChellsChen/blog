function  GetUrlParams () {
    var reslut = { };
    var params = (window.location.search.split("?")[1] || "").split("&");
    for (var param in params)
    {
        if(params.hasOwnProperty(param))
        {
            paramParts = params[param].split("=");
            reslut[paramParts[0]] = decodeURIComponent(paramParts[1] || "");

        }
    }
    return reslut;
}


$(document).ready(function(){
    var id = GetUrlParams().id;
    if(id){
        $.ajax({
            url:"/store/"+id+"/index.html",
            async:false,
            success:function(data){
                $("#content").html(data);
            }
        });
    }
});
