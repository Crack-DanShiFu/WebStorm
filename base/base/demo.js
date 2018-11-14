



/*
window.onload=function (ev) {
    alert(document.getElementById("box").innerHTML)
    alert(document.getElementsByName("sex")[0].value)
    alert(document.getElementsByTagName('p')[0].innerHTML)

}*/
/*

window.onload=function (ev) {
    alert(getID("box").innerHTML)
    alert($("box").innerHTML)
    alert(Base.$("box").innerHTML)

}
*/
/*window.onload=function (ev) {

    $("#box").click(function () {
        $(this).hide();
    });


}*/




window.onload=function (ev) {

    newBase().getID("box").css("color","#12f71a").css("background","#f77464");
    newBase().getTagName("p").css("color","red").css("background","#f7ca7b");
    newBase().getTagName('p').html("标题").click(function () {
        alert(12)
    });

    newBase().getID("box").$fontSize(19);

}

