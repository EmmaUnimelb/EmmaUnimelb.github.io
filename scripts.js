function saveSourceData(){
    myvar=document.getElementById("datasource").value;
    localStorage.setItem("transfer", myvar);
    window.location="next.html"
}

function showSourceData(){
    document.getElementById("showdata").innerHTML=localStorage.getItem("transfer");
}

var box_sizes=["tiny_box","little_box","half_box","full_box"]
function changeSizeClass(elID,clsName){
    let element = document.getElementById(elID);
    for(b in box_sizes ){
        element.classList.remove(box_sizes[b]);
    }
    element.classList.add(clsName)
}
