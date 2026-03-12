
const fs=require("fs")

function load(file){

let stream=fs.createReadStream(file)

stream.on("data",chunk=>{

})

}

module.exports={load}
