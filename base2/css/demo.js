
window.onload=function (ev) {

    newBase().getID("box").css("color","#12f71a").css("background","#f77464");
    newBase().getTagName("p").css("color","red").css("background","#f7ca7b");
    newBase().getTagName('p').html("标题").click(function () {
        alert(12)
    });

    // newBase().getID("box").$fontSize("39px");

// alert(newBase().getID("box").css("fontSize"));

    alert(newBase().getClass("red").elements.length)

}

