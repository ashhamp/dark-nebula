exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    // Optional Challenge
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    // Optional Challenge
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    // Optional Challenge
    var ownProperties = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        ownProperties.push(prop + ': ' + obj[prop]);
      }
    }
    return ownProperties;
  }
};
