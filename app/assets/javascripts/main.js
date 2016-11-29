$(function(){
    //Initialize homepage slider
    if($('#slippry-demo').length > 0){
        $('#slippry-demo').slippry({
            pager:false,
            auto: true
        });
    }

    //Window resize event
    window.onresize = myResize;
    myResize();
});

//Browser resize event
function myResize(){
    var bWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || window.width();
    var bHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || window.height();
}