function takeANumber(katzDeliLine,newName){
  for(var i=0;i<newName.length;i++){
    katzDeliLine.push(newName[i]);
    return ("Welcome,"+newName[i]+". You are number "+newName.length-2+" in line.");
  }
}
