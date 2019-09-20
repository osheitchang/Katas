function wave(str){
  let x =-1;
 var newArr = str.split("").map(char=> {return str.split("").fill(char.toUpperCase(),x+=1,x+1).join("")
 })
 let result = newArr.filter(word=>{ return word !== word.toLowerCase()})
 return result
  }
