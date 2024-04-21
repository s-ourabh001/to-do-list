let submit=document.getElementById("btnl");

let clear=document.getElementById("clrl");
let parentlist=document.getElementById("todo");

submit.addEventListener("click",function (){

    let input=document.getElementById("inp").value;
  
  

let listitem=document.createElement("li");
    let delbtn=document.createElement("button");
    let span1=document.createElement("span");
    span1.innerHTML=input;
    delbtn.innerHTML="delete task";
    listitem=document.createElement("li");
    span1.style.width="50px";
    span1.style.height="20px";
    span1.style.backgroundColor="green";
    span1.style.marginRight="30px";
   
   // span1.style.rightMargin="30px";
    listitem.appendChild(span1);
    listitem.appendChild(delbtn);
    parentlist.appendChild(listitem);

    delbtn.addEventListener("click",function(){
        listitem.remove();

    })

   


})

clear.addEventListener("click",function(){
    parentlist.innerHTML=null;
})


