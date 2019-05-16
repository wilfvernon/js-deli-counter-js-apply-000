var arr = []
var queue = 1
function takeANumber (line){
  line.push(queue)
  queue++;
  console.log(`Welcome, you are number ` + (queue-1) + ` in line.`)
}

takeANumber(arr)
takeANumber(arr)
takeANumber(arr)
takeANumber(arr)