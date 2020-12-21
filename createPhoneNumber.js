function createPhoneNumber(numbers){
    numbers.splice(0,0,'(')  
    numbers.splice(4,0,')')
    numbers.splice(8,0,'-')
    numbers.splice(5,0,' ')
    return numbers.join('');
    
  }