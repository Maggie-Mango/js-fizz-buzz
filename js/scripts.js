






/*
This works with Key Value pairs and a while loop. The dictionary has to be in order (numerically greatest to least) or else this won't work. We are also looping through the dictionary values with a while clause. While the key is being inserted into the empty string, we are subtracting the original argument number until we are unable to loop through the dictionary anymore.


function convertToRomanNum(number) {
	let romanDictionary = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    X: 10,
    V: 5,
    IV: 4,
    I: 1
  };
  let roman = "";

  for (let key in romanDictionary) {
    //console.log("key: ", key)
    //console.log("value: ", romanDictionary[key])
  while (number >= romanDictionary[key]) {
    roman += key
    number -= romanDictionary[key]
	}
}
  return roman
}
console.log(convertToRomanNum(5))

*/