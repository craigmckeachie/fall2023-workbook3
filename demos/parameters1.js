function displayFavoriteThings(name, movie, band) {
  let message = ` 
                ${name}
                ${movie}
                ${band}
                 `;
  console.log(message);

  //OR
  // console.log("Name: " + name);
  // console.log("Movie: " + movie);
  // console.log("Band: " + band);
}

// displayFavoriteThings("Craig", "Seven", "A Tribe Called Quest");
// displayFavoriteThings("A Tribe Called Quest", "Seven", "Craig" );
// displayFavoriteThings(1, 2, 3)

let variable1 = "a";
let variable2 = "b";
let variable3 = "c";

displayFavoriteThings(variable1, "d", variable3);
