function takeANumber(katzDeliLine,newName){
    katzDeliLine.push(newName);
    return ("Welcome, "+newName+". You are number "+katzDeliLine.length+" in line.");
  }

function nowServing(katzDeliLine){
if(katzDeliLine.length=0){
console.log"There is nobody waiting to be served!"
}
  return ("Currently serving "+katzDeliLine.shift()+".")
  }
