function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine>[]) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
var line=[];
  for(var i=0;i<katzDeliLine.length;i++) {
    if(katzDeliLine.length>0) {
      line.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    else {
      return "The line is currently empty."
    }
  }
    return "The line is currently:" + line;
}
