function wave(str){
    let letter;
     let x =-1;
      for(i=0;i<str.length;i++){
    if(str[i] !="" || str !== "") {
    var newArr = str.split("").map(char=>{return str.split("").fill(char.toUpperCase(),x+=1,x+1).join("");})
    }
    else{console.log("hello")}
    return newArr
    }
   }
  wave('')