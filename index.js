function takeANumber(katzDeliLine,newName){
  for(var i=0;i<newName.length;i++){
    katzDeliLine.push(newName[i]);
    return ("Welcome, Ada. You are number "+(newName.length-2)+" in line.");
  }
}
