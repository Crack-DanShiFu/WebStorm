


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
            var ClassNames=[];
            ClassNames=all[i].className.split(" ");
            for(var j=0;j<ClassNames.length;j++)
            if(ClassNames[j]==className){
                this.elements.push(all[i]);
            }
        }
        return this;
    }
    this.getElement=function (str) {
        /*
        * #XXX  获取ID为XXX的节点
        * .XXX  获取Class为XXX的节点
        * xxx   获取节点为XXX的节点
        *
        * */

        if(str[0]=="#"){
            var id=str.substring(1,str.length);
            this.getID(id);
            return this;
        }
        else if(str[0]=="."){
            var cls=str.substring(1,str.length);
            this.getClass(cls);
            return this;
        }
        else {
            this.getTagName(str);
            return this;
        }

    }

}


/*设置CSS*/
Base.prototype.css=function (attr,value) {
    for(var i=0;i<this.elements.length;i++) {
        if(arguments.length==1){
            return getStyle(this.elements[i],attr);
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

Base.prototype.setCent=function (width,height) {
    var top=(document.documentElement.clientHeight-height)/2;
    var left=(document.documentElement.clientWidth-width)/2;
    for(var i=0;i<this.elements.length;i++)
    {
        this.elements[i].style.top=top+"px";
        this.elements[i].style.left=left+"px";
    }
    return this;
}

Base.prototype.resize=function (fn) {

    for(var i=0;i<this.elements.length;i++){
        this.elements[i];
        window.onresize=function (ev) {

            fn();
            if(this.elements[i].offsetLeft>getInner().width-this.elements[i].offsetWidth){
                this.elements[i].style.left=getInner().width-this.elements[i].offsetWidth+"px";

            }
            if(this.elements[i].offsetTop>getInner().height-this.elements[i].offsetHeight){
                this.elements[i].style.top=getInner().height-this.elements[i].offsetHeight+"px";
            }
        }
    }

    return this;
}


Base.prototype.lock=function () {
    for(var i=0;i<this.elements.length;i++)
    {
        this.elements[i].style.width=getInner().width+"px";
        this.elements[i].style.height=getInner().height+"px";
    }
    return this;

}


Base.prototype.drag=function (oDiv) {
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onmousedown=function (e) {
            var e=getEvent(e);
            var _this=this;
            var diffX=e.clientX-_this.offsetLeft;
            var diffY=e.clientY-_this.offsetTop;

            document.onmousemove=function (e) {
                var e=getEvent(e)
                var left=e.clientX-diffX;
                var top=e.clientY-diffY;

                if(left<0){
                    left=0
                }
                else if(left>getInner().width-_this.offsetWidth){
                    left=getInner().width-_this.offsetWidth;
                }
                if(top<0){
                    top=0
                }else if (top>getInner().height-_this.offsetHeight){
                    top=getInner().height-_this.offsetHeight
                }
                _this.style.left=left+"px"
                _this.style.top=top+"px"


            }
            document.onmouseup=function () {
                this.onmousemove=null;
                this.elements[i].onmouseup=null;
            }
        }
    }return this;
}





















