const prev=document.getElementById("prev");
const next=document.getElementById("next");
const brand=document.getElementById("name");
const img=document.getElementById("img");
const random=document.getElementById("random-btn");
const cakes=[
    {name:"Cuppie",img:"dessert1.jpg"
}, {name:"Top notch",img:"dessert8.jpg"
}, {name:"creamy",img:"dessert4.jpg"
}, {name:"fluffy",img:"dessert10.jpg"
}
];
let number=0;
function showperson(person){
    const item=cakes[person];
    img.src=item.img;
    brand.textContent=item.name;
}
next.addEventListener('click',function(){
    number++;
     if(number>cakes.length-1){
        number=0;
    }
    showperson(number);
   
})
prev.addEventListener('click',function(){
   number--;
    if(number<0){
        number=cakes.length-1;
    }
    showperson(number);
   
})
random.addEventListener('click',function(){
    number=Math.floor(Math.random()*cakes.length);
    showperson(number);
})

window.addEventListener("DOMContentLoaded", function() {
        showperson(number);
})