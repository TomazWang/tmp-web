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
            xmlHttp = new XMLHttpRequest();
        }catch(e){
            console.log(e);
            xmlHttp = false;
        }
    }
    
    if(!xmlHttp){
        alert("Something's wrong!! Can't create xmlhttpRequestObject");
    }else{
        // console.log("xmlHttp create");
        return xmlHttp;
    }
    
}



function process(){
    console.log("entering process :"+xmlHttp.readyState);
    if(xmlHttp.readyState == 4 || xmlHttp.readyState === 0){
        // console.log("begin get input");
        var textInput = encodeURIComponent(document.getElementById("inputBox").value);
        xmlHttp.open("GET","./php/main-function.php?inputText="+textInput,true); // make a request
        xmlHttp.onreadystatechange = handleServerResponse; // setting call back function
        xmlHttp.send(null); // make a send, null for GET;
    }else{
        setTimeout(process(), 1000);
        // wait and try again see if xmlHttp is a ready state.
    }
}



function handleServerResponse(){
    // basically is a callback function
    
    // chech states first
    if(xmlHttp.readyState == 4){
        // done communicating
        // console.log("Communication is done");    
        if(xmlHttp.status == 200){
            var xmlResponse = xmlHttp.responseXML;
            // console.log(xmlResponse);
            var resultText;
            var e = xmlResponse.getElementsByTagName("resultText");
            
            for (var i=0;i<e.length;i++){
                resultText = e[i].childNodes[0].nodeValue;
            }
            
            
            document.getElementById("letters_left").innerHTML = '<span style="color:blue">'+resultText+'</span>';
            setTimeout( process(), 1000);
        }else{
            alert('Something went wrong!! Server response err.');
        }
    }
    
   
    
    
}