let number = document.getElementById("count1");
let count = 0;

setInterval(()=>{
    if(count===95){
        clearInterval();
    }
    else{
        count+=1;
        number.innerHTML=`${count}%`;
    }
},40);

let number1 = document.getElementById("count2");
let count1 = 0;

setInterval(()=>{
    if(count1===90){
        clearInterval();
    }
    else{
        count1+=1;
        number1.innerHTML=`${count1}%`;
    }
},43);

let number2 = document.getElementById("count3");
let count2 = 0;

setInterval(()=>{
    if(count2===70){
        clearInterval();
    }
    else{
        count2+=1;
        number2.innerHTML=`${count2}%`;
    }
},55);

let number3 = document.getElementById("count4");
let count3 = 0;

setInterval(()=>{
    if(count3===75){
        clearInterval();
    }
    else{
        count3+=1;
        number3.innerHTML=`${count3}%`;
    }
},40);

let numberb = document.getElementById("count5");
let countb = 0;

setInterval(()=>{
    if(countb===95){
        clearInterval();
    }
    else{
        countb+=1;
        numberb.innerHTML = `${countb}%`;
    }
},43);




let number4 = document.getElementById("number1");
let count4 = 0;

setInterval(()=>{
    if(count4===100){
        clearInterval();
    }
    else{
        count4+=1;
        number4.innerHTML = `${count4}%`;
    }
},18);


let number5 = document.getElementById("number2");
let count5 = 0;

setInterval(()=>{
    if(count5===85){
        clearInterval();
    }
    else{
        count5+=1;
        number5.innerHTML = `${count5}%`;
    }
},22);


let number6 = document.getElementById("number3");
let count6 = 0;

setInterval(()=>{
    if(count6===90){
        clearInterval();
    }
    else{
        count6+=1;
        number6.innerHTML = `${count6}%`;
    }
},20);


let number7 = document.getElementById("number4");
let count7 = 0;

setInterval(()=>{
    if(count7===95){
        clearInterval();
    }
    else{
        count7+=1;
        number7.innerHTML = `${count7}%`;
    }
},19);

const btn = document.querySelector("#top");

btn.addEventListener("click",()=>{
    document.documentElement.scrollTo({
        top:0,
        behavior: 'smooth',
    });
});

function dark(){
    document.body.classList.toggle('dark');
}