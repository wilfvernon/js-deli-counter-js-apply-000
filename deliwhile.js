var deliLine = ["Will", "Roxy", "Lizzy", "Rachel", "Steven", "Jonti"]

function currentLine(line){
  if(line.length === 0){
    console.log("The line is currently empty.")
    return "The line is currently empty."
  } else {
    var current = [];
    var n = line.length;
    var i = 1;
    while (i <= n){
      if(i === n){
        console.log("The line is currently:" + current)
        return "The line is currently:" + current
      } else {
        current.push(" " + (i) + ". " + line[0])
        line.shift()
        i++
      }
      
    }
  } 
}

currentLine(deliLine)