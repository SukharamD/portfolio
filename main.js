var typed = new Typed('.text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:100,
    loop:true
  });

let bar=document.getElementById("bar")
let nav=document.getElementById("navbar")
let close=document.getElementById("close")

if(bar)
{
    bar.addEventListener("click",()=>{
        nav.classList.toggle("active")
    })
}

if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active")
    })
}