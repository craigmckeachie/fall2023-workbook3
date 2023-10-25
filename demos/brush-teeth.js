function brushTeeth(name, toothBrushType) {
  if (!name) {
    return false;
  }
  console.log(`${name}, stand up.`);
  console.log("Walk into bathroom");
  console.log("Stand in front of sink.");

  console.log("Pick up toothbrush.");
  if (toothBrushType == "electric") {
    console.log("Plug in toothbrush");
  }
  console.log("Turn on water");
  return true;
}

if (brushTeeth("Talib", "electric")) {
  console.log("We successfully brushed our teeth");
} else {
  console.log("You need to learn to brush your teeth");
}
