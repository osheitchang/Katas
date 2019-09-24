function findMissingLetter(array){
  let letter;
  let alp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
  let x = alp.indexOf(array[0].toLowerCase())-1
  let upperCase = array[0] === array[0].toUpperCase()
    for(i=0;i<array.length;i++){
      x++
    if(array[i].toLowerCase() !== alp[x])
    {if(upperCase){ return alp[x].toUpperCase()} else{return alp[x]}}
    }
  }

