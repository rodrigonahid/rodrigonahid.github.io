var header = document.querySelector(".header");

function stickHeader(){
    if(header.scrollY > 0){
        header.classList.add("sticky");
        console.log(header)
    }else{
        header.classList.remove("sticky");
    }
    
}
header.addEventListener('click', stickHeader());