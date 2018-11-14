function getInner() {
    if(typeof innerHeight !="undefined"){
        return {
            width:innerWidth,
            height:innerHeight
        }
    }else{
        return{
            width :document.documentElement.clientWidth,
            height :document.documentElement.clientHeight
        }
    }
}


function getStyle(element,attr) {
    if(typeof window.getComputedStyle!='undefined'){//w3c
        return window.getComputedStyle(element,null)[attr];
    }else if(typeof element.currentStyle!='undefined'){
        return element.currentStyle[attr];
    }

}


function getEvent(e) {
    return e||window.event;
}









