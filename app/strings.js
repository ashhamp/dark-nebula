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
  
  },

  reverseString: function(str) {
    return str.split("").reverse().join("");
  }
};
