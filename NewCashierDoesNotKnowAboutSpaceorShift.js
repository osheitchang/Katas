function getOrder(input) {
    let menu = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke'];
    let order = [];
    for(x = 0; x < input.length + 4; ){
      let lower = menu[x]
      if(input.includes(menu[x])){
        let upper = menu[x].charAt(0).toUpperCase() + lower.substring(1)
        order.push(upper)
        input = input.replace(menu[x],'')
      }
      else{
        x++
      }
    }
    return(order.join(" "))
  }