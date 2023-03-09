document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});

document.querySelector("#show-login2").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});

document.querySelector("#show-profile").addEventListener("click",function(){
    document.querySelector(".popupAKUN").classList.add("active");
});
document.querySelector(".popupAKUN .TUTUP").addEventListener("click",function(){
    document.querySelector(".popupAKUN").classList.remove("active");
});
