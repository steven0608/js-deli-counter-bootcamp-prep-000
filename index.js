function takeANumber(katzDeliLine,newName){
    katzDeliLine.push(newName);
    return ("Welcome, "+newName+". You are number "+katzDeliLine.length+" in line.");
  }

function nowServing(katzDeliLine){
  katzDeliLine.shift();
  return ("Currently serving "+katzDeliLine[katzDeliLine.length-1]+".")
  }
