

window.onload=function (ev) {

    newBase().getClass("mamber").hover(function () {
        newBase().getTagName("ul").show();
    },function () {
        newBase().getTagName("ul").hide();
    });

    newBase().getTagName("ul").hover(function () {
        newBase().getTagName("ul").show();
    },function () {
        newBase().getTagName("ul").hide();
    });

    newBase().getTagName("ul").click(function () {
        newBase().getTagName("ul").hide();
    })

}
