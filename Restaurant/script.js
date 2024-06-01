let a = document.getElementById("count1");
let b = document.getElementById("count2");
let count = 0;
let time = 0;

setInterval(()=>{
    if(count == 15){
        clearInterval();
    }
    else{
        count +=1;
        a.innerHTML = `${count}`
    }
},200);


setInterval(()=>{
    if(time == 50){
        clearInterval();
    }
    else{
        time +=1;
        b.innerHTML = `${time}`
    
    }
},50);


function toggledark(){
    document.body.classList.toggle('darkmode')
}

let gotop = document.getElementById("top");

gotop.addEventListener("click",(e)=>{
    e.preventDefault();
    document.documentElement.scrollTo({
        top:0,
        behavior:'smooth'     
    });
});


document.onscroll = function() {myFunction()};

function myFunction(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        gotop.style.display = 'block';
    }
    else{
        gotop.style.display = 'none';
    }
}