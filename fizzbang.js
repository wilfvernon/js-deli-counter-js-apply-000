function fizzBang(num){
  var i = 1;
  for(i = 1; i <= num; i++){
    if (Number.isInteger(i/15)){
      console.log("FizzBang")
    } else if (Number.isInteger(i/5)){
      console.log("Bang")
    } else if (Number.isInteger(i/3)){
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
}

fizzBang(300)