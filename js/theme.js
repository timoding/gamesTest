
let iframe = document.getElementById("myIframe");
let timers;

// 定义一个方法来获取外部链接并设置 iframe 的 src
function setIframeSrc() {
    iframe.src = "https://app.phantomarena.co";
}

// 调用方法来设置 iframe 的 src
setIframeSrc();

function focusIframe(){
    console.log('111==>', iframe.contentWindow)
    console.log('222==>', iframe.contentWindow.document)
    if(iframe && iframe.contentWindow && iframe.contentWindow.document){
        console.log('333===>')
    
        timers && clearInterval(timers);
        let iframeDoc = iframe.contentWindow.document;
        iframeDoc.onclick =function(){iframe.focus();}

        iframeDoc.onfocus =function(){console.log("frame focus");}
        iframeDoc.onblur =function(){console.log("frame blur");}
    }
}

// focusIframe()
timers = setInterval(focusIframe,1000);
// setTimeout(function(){
//     focusIframe()
// }, 2000);
// console.log('666')
// console.log('777-==>', iframe)
