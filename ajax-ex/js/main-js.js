var xmlHttp = createXmlHttpRequestObject();


function createXmlHttpRequestObject(){
    var xmlHttp;
    
    // setting xmlHttp Obj.
    if(window.ActiveXObject){
        // IE is running
        try{
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e){
            console.log(e);
            xmlHttp = false;
        }
    }else{
        // for other Browser
        try{
            xmlHttp = new XMLHttpRequset();
        }catch(e){
            console.log(e);
            xmlHttp = false;
        }
    }
    
    if(!xmlHttp){
        alert("Something's wrong!! Can't create xmlhttpRequestObject");
    }else{
        return xmlHttp;
    }
    
}



function process(){
    if(xmlHttp.readyState == 4 || xmlHttp.readyState === 0){
        
    }else{
        
    }
}