let name = "Tyler Rugh";
let address = "313 Silvis Street ";
let city = "Jeannette";
let state = "Pennsylania";
let zip = "15644";

function displayMailLabel(name, address, city, state, zip) {
  let label = `
    ${name}
    ${address}
    ${city}, ${state} ${zip}
  `
  console.log(label);
}

displayMailLabel(name, address, city, state, zip);
