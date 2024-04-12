// Write class below
class ShiftCipher {
  constructor(value) {
    this.value = value;
    this.alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
  }
  //decrypt method
  decrypt(decryptionString) {
    //set storage for returned values
    let newString = [];
    //iterator over decryption string
    for (let i = 0; i < decryptionString.length; i++) {
      //character being assessed
      let letter = decryptionString[i].toLowerCase();
      //alphabet array index holder
      let ind = 0;
      //If character is in array set ind as the index of the character
      if (this.alphabet.includes(letter)) {
        ind = this.alphabet.indexOf(letter);
        console.log(ind);
        //If cipher value does NOT wrap alphabet, push the ciphered letter
        if (ind - this.value >= 0) {
          newString.push(this.alphabet[ind - this.value]);
          //If the cipher value means we need to wrap...
        } else {
          let diff = ind - this.value;
          console.log(diff);
          ind = 26 + diff;
          newString.push(this.alphabet[ind]);
        }
        //If character isn't in the array, push the character directly to storage array
      } else {
        newString.push(letter);
      }
    }
    console.log(newString.join("").toLowerCase());
  }

  encrypt(encryptionString) {
    //Array for collecting encrypt
    let newString = [];
    //Iterator for encrypt string
    for (let i = 0; i < encryptionString.length; i++) {
      let charCode = 0;
      //Make all xters upper case
      let upperCase = encryptionString.toUpperCase();
      //If the xter is inside the upper case Unicode range
      if (upperCase.charCodeAt(i) >= 65 && upperCase.charCodeAt(i) <= 90) {
        charCode = upperCase.charCodeAt(i) + this.value;
        //Wrap check
        if (charCode > 90) {
          newString.push(charCode - 26);
        } else {
          newString.push(charCode);
        }
        //if xter outside upper case unicode range, push it to array
      } else {
        newString.push(upperCase.charCodeAt(i));
      }
    }
    console.log(String.fromCharCode.apply(null, newString));
  }
}

const cipher = new ShiftCipher(1);
cipher.decrypt("a");
