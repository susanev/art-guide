function inputFocus(i){
    if(i.value==i.defaultValue){ 
        i.value=""; 
        i.style.color="#545454"; 
        i.style.fontSize="16px";
    }
}

function inputBlur(i){
    if(i.value==""){
        i.value=i.defaultValue; 
        i.style.color="#a8a8a8"; 
        i.style.fontSize="14px";
    }
}

function showMenu() {
    var m = document.getElementById("main-nav");
    if(m.style.display == "block"){
        m.style.display = "none";
    }
    else {
        m.style.display = "block";
    }
}