exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var patt = /\d/;
    return patt.test(str);
  },

  containsRepeatingLetter : function(str) {
    var patt = /([a-z])\1/i
    return patt.test(str);
  },

  endsWithVowel : function(str) {
    var vowels = /[aeiou]$/i;
    return vowels.test(str);
  },

  captureThreeNumbers : function(str) {
    var patt = /\d\d\d/;
    var result = patt.exec(str);
    if (result === null) {
      return false
    } else {
      return result[0];
    }
  },

  matchesPattern : function(str) {
    var patt = /^\d{3}-\d{3}-\d{4}$/;
    return patt.test(str);
  },

  isUSD : function(str) {
    var patt = /^\$(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/
    return patt.test(str);
  }
};
