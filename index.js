function takeANumber (line, name){
  line.push(name);
  console.log(`Welcome, ${name}. You are number ` + line.length + ` in line.`);
  return `Welcome, ${name}. You are number ` + line.length + ` in line.`;
}

function nowServing (line){
  if (line.length === 0){
    console.log("There is nobody waiting to be served!");
    return "There is nobody waiting to be served!";
  } else {
    var now = line[0];
    line.shift();
    console.log(`Currently serving ${now}.`)
    return `Currently serving ${now}.`
  }
}

function currentLine(line){
  if(line.length === 0){
    console.log("The line is currently empty.")
    return "The line is currently empty."
  } else {
    var current = [];
    var n = line.length;
    for (var i = 0; i <= n; i++){
      if(i === n){
        console.log("The line is currently:" + current)
        return "The line is currently:" + current
      } else {
        current.push(" " + (i+1) + ". " + line[0])
        line.shift()
      }
      
    }
  } 
}