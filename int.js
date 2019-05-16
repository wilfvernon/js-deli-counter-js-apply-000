var arr = []
function takeANumber (line){
  var queue = 1;
  line.push(queue)
  queue++;
  console.log(`Welcome, you are number ` + (queue-1) ` in line.`)
}

