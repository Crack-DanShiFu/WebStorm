

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



    newBase().getClass("LoginFrom").setCent(350,250)


    newBase().resize(function () {
        // newBase().getClass("LoginFrom").setCent(350,250);
        newBase().getClass("screen").lock();

    })



  /*  newBase().getClass("Login").click(function () {
        newBase().getClass("LoginFrom").css("display","block");
    });*/

    newBase().getElement(".Login").click(function () {
        newBase().getClass("LoginFrom").css("display","block");
        newBase().getClass("screen").lock();
        newBase().getClass("screen").css("display","block");

    });

    newBase().getClass("Xclon").click(function () {
        newBase().getClass("LoginFrom").css("display","none");
        newBase().getClass("screen").css("display","none");
    });

   // alert(newBase().getElement("#Lhead"))
    newBase().getClass("Xclon").hover(function () {
        newBase().getClass("Xclon").css("background-image","url(\"x(1).png\")")
    },function () {
        newBase().getClass("Xclon").css("background-image","url(\"x.png\")")
    });



    // var oDiv=document.getElementById("LoginFrom")
    // var ohead=document.getElementById("Lhead")
    //
    // oDiv.drag();

    newBase().getID("LoginFrom").drag();


}
