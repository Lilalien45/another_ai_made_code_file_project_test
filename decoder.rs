
use std::fs;

fn main(){

let data=fs::read("input.bin").unwrap();

for b in data{

print!("{:02X}",b);

}

}
