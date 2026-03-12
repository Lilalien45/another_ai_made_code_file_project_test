
package main

import(
"fmt"
"os"
)

func main(){

f:=os.Args[1]

info,_:=os.Stat(f)

fmt.Println(info.Size())

}
