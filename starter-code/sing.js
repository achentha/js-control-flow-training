console.log("sing.js loaded");

function log1(number) {
  console.log(`${number} bottle` + (number > 1 ? "s" : "") + " of beer on the wall,");
  console.log(`${number} bottle` + (number > 1 ? "s" : "") + " of beer!");
}

function log2(number) {
  console.log("Take one down and pass it around,");
  if (number === 0) {
    console.log("No more bottles of beer on the wall!");
  }
  else {
    console.log(`${number} bottle` + (number > 1 ? "s" : "") + " of beer on the wall!");
  }
}

function sing() {
  let count = prompt("How many verses do you want to hear?");

  while (count > 0) {
    log1(count);
    count--;
    log2(count);
  }
}

sing();
