function sortArray(array) {
    let x=0;
    var oddArr = array.filter(num=>{
      if(num%2 !== 0){
        return num;
      }
    })
      oddArr.sort((a,b)=>a-b)
      var result = array.map(num=>{
        if(num % 2 !== 0 ){
          num = oddArr[x++]
          return num
        }
        return num
      })
    
  