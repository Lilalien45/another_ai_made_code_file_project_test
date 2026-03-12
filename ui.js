
let file=null

fileInput.onchange=e=>{

file=e.target.files[0]

}

dropZone.ondrop=e=>{

e.preventDefault()

file=e.dataTransfer.files[0]

}

dropZone.ondragover=e=>{

e.preventDefault()

}

btn2.onclick=()=>{

try{

console.log("loading model")

}catch{

btn2.style.display="none"

btn3.style.display="block"

}

}

btn3.onclick=()=>{

console.log("segment loading")

}

btn4.onclick=()=>{

console.log("gui parsing")

}

btn5.onclick=()=>{

console.log(file)

}

btn6.onclick=()=>{

console.log("decode")

}

btn7.onclick=()=>{

for(let i=0;i<10;i++){

let b=document.createElement("button")

b.innerText="confirm"

b.style.position="absolute"

b.style.left=Math.random()*80+"%"

b.style.top=Math.random()*80+"%"

document.body.appendChild(b)

}

}
