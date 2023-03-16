



var btn = document.getElementById("btn");
btn.addEventListener( "click", loadData)

function loadData(){
    

    const xtp = new XMLHttpRequest();
    xtp.open("GET", "data.json", true)


    xtp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200)
        {}
    }
    xtp.onload = function(){
        if(this.status === 200)
            {}
        else
        {}
    }

    xtp.send();
    document.getElementById("btn").innerHTML = xtp.responseText;
    
}