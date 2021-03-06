var P1 = {
  name: "MORTY",
  key: 1
};

var P2 = {
  name: "RICK",
  key: 2
};

// Create one dimensional array
var gfg = new Array(7);

// Loop to create 2D array using 1D array
for (var i = 0; i < gfg.length; i++) {
  gfg[i] = new Array(6);
}

// Loop to initialize 2D array elements.
function FeldInitialization() {
  for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 7; j++) {
          gfg[i][j] = 0;
      }
  }
  return gfg;
}

export {
  FeldInitialization,
  P1,
  P2
}