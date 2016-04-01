exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var newString = "";
    for (var i = 0; i < str.length; i++) {
      if (str[i - 1] !== str[i] && str[i + 1] !== str[i]) {
          newString += str[i];
      } else if (str[i - 1] !== str[i]) {
          newString += str[i].repeat(amount);
      }
    }
    return newString;
  },

  wordWrap: function(str, cols) {
    var arr = str.split(" ")
    var counter = 0
    for (i = 0; i < arr.length - 1; i++) {
      if((arr[i].length + arr[i + 1].length) + counter < cols) {
        counter += arr[i].length
        arr[i] += " ";
      } else {
        arr[i] += "\n";
        counter = 0;
      }
    }
    return arr.join("");
  },

  reverseString: function(str) {
    return str.split("").reverse().join("");
  }
};
