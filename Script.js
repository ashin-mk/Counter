const button=document.querySelectorAll("button")
const p=document.querySelectorAll("p")[0]
const counter=document.createElement("h1")
let i=0;
let timepieace;
function start(){
    const h=document.querySelectorAll("h1")
    if(button[0].className==="notActive"){
        return alert("Already started")
    }
    if(h.length===1){
        counter.className="counter"
        document.body.appendChild(counter)  
    }
button[0].className="notActive"
button[1].className="active"
button[2].className="notActive"
 return  timepieace= setInterval(()=>{
        i++
        return counter.innerHTML=i
    },1000)
}

function stop(){
    if(button[0].className==="active"){
        return alert("Press Start first")
    }

        button[0].className="active"
        button[1].className="notActive"
        button[2].className="active"
return clearTimeout(timepieace)
}

function reSet(){
    if(button[2].className==="notActive"){
        return alert("Press Stop Fisrt Then Reset")
    }
   button[0].className="active"
   button[1].className="notActive"
   button[2].className="notActive"
    i=0
   return counter.innerHTML=i
}