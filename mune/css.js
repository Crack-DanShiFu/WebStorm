


var newBase=function() {
    return new Base();
}


/*
* 函数式封装
* */
function getID(id) {
    return document.getElementById(id)
}
function $(id) {
    return document.getElementById(id)
}
function $$ (name) {
    return document.getElementsByTagName(name)
}
function $$$ (name) {
    return document.getElementsByName(name)
}

/*
* 对象式
*
* */

var Base1={
    $:function (id) {
        return document.getElementById(id)
    },
    $$:function (name) {
        return document.getElementsByTagName(name)
    },
    $$$:function (name) {
        return document.getElementsByName(name)
    }
}


function Base() {
    this.elements=[];
    this.getID=function (id) {
        this.elements.push(document.getElementById(id));
        return this;
    };
    
    
    this.getTagName=function (Tag) {

        var tags=document.getElementsByTagName(Tag);

        for(var i=0;i<tags.length;i++){
            this.elements.push(tags[i]);
        }
        return this;
    }

    this.getClass=function (className) {

        var all=document.getElementsByTagName("*")
        for(var i=0;i<all.length;i++){
            if(all[i].className==className){
                this.elements.push(all[i]);
            }
        }
        return this;
    }

}


/*设置CSS*/
Base.prototype.css=function (attr,value) {
    for(var i=0;i<this.elements.length;i++) {
        if(arguments.length==1){
            if(typeof window.getComputedStyle!='undefined'){
                return window.getComputedStyle(this.elements[i],null)[attr];

            }else if(typeof this.elements[i].currentStyle!='undefined'){
                return this.elements[i].currentStyle[attr];
            }
        }

        this.elements[i].style[attr] = value;
    }
    return this;
}

Base.prototype.html=function (str) {
    for(var i=0;i<this.elements.length;i++) {
        this.elements[i].innerHTML = str;
    }
    return this;
}

Base.prototype.click=function (fn) {
    for(var i=0;i<this.elements.length;i++) {
        this.elements[i].onclick=fn;
    }
    return this;
}

Base.prototype.$fontSize=function (size) {

    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.fontSize=size;
    }

    return this;
}




Base.prototype.hover=function (over,out) {

    for(var i=0;i<this.elements.length;i++)
    {
        this.elements[i].onmouseover=over;
        this.elements[i].onmouseout=out;
    }

    return this;


}

Base.prototype.show=function () {
    for(var i=0;i<this.elements.length;i++)
    {
        this.elements[i].style.display="block";
    }
    return this;

}


Base.prototype.hide=function () {
    for(var i=0;i<this.elements.length;i++)
    {
        this.elements[i].style.display="none";
    }
    return this;

}































