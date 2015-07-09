var CLASS;
var INDEX;
var INDEX_URL = "/store/index.json"
var CLASS_URL = "/store/class.json"

function datainit(){

    $.ajax({
        url:INDEX_URL,
        aysnc:false,
        dataType:"json",
        success:function(data){
            CLASS = data;

        },
    });

    $.ajax({
        url:CLASS_URL,
        aysnc:false,
        dataType:"json",
        success:function(data){
            INDEX = data;
        };
    });

}
