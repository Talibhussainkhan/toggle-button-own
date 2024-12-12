let checkEl = document.querySelector("#checkbox");
let bodyEl = document.querySelector("body");
let btn = document.querySelector("#circle");

console.log(checkEl.checked);


updateToggle();

function updateToggle(){
    if(checkEl.checked){
        bodyEl.style.backgroundColor ="black";
        btn.style.backgroundColor ="black";
    }else{
        bodyEl.style.backgroundColor = "white";
        btn.style.backgroundColor ="white";
    }

}
checkEl.addEventListener("input", ()=>{
    updateToggle();
})