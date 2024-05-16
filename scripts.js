function saveSourceData(){
    myvar=document.getElementById("datasource").value;
    localStorage.setItem("transfer", myvar);
    window.location="next.html"
}

function showSourceData(){
    document.getElementById("showdata").innerHTML=localStorage.getItem("transfer");
}
