function scuberGreetingForFeet(aValue){
  if (aValue <= 400) 
  return `This one is on me!`; 
  if (aValue > 2000 && aValue <=2500)
  return `I will gladly take your thirty bucks.`;
  else if (aValue > 2500)
  return `No can do.`;
}

function ternaryCheckCity(aCity){
  return aCity === `NYC` ?`Ok, sounds good.` :`No go.`;
}

function switchOnCharmFromTip(aTip){
  switch (aTip) {
    case `generous`: 
    return `Thank you so much.`;
    case `not as generous`: 
    return `Thank you.`
    default:
    return `Bye.`
  }
}