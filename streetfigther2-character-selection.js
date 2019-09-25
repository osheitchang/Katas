function streetFighterSelection(fighters, position, moves){
    let result = [];
    let x = 0
    let y = 0
    moves.forEach(move=>{
      switch (move){
      case 'up': if(y > 0){y--}
      result.push(fighters[y][x])
      break;
      case 'down': if(y < 1){y++}
      result.push(fighters[y][x])
      break; 
      case 'left': if(x === 0){x=5}else if(x>0){x--}
      result.push(fighters[y][x])
      break; 
      case 'right': if(x === 5){x=0}else if(x<5){x++}
      result.push(fighters[y][x])
      break;  
    }
    })
    
      return result;
    }