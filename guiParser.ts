
function parse(file){

let reader=new FileReader()

reader.onload=function(){

let t=reader.result

console.log(t)

}

reader.readAsText(file)

}
