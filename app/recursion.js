exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    // Optional Challenge

    // var list = [];
    // (function look(data) {
    //   var dir = data.dir
    //   var files = data.files;
    //
    //   if (typeof files !== "undefined" && dirName === null) {
    //       for (var i = 0; i < files.length; i++) {
    //         if (typeof files[i] === "string") {
    //           list.push(files[i]);
    //         } else {
    //           look(files[i]);
    //         }
    //   } else if (typeof files !== "undefined" && dirName !== null) {
    //       for (var i = 0; i < files.length; i++) {
    //         if (dir === dirName && typeof files[i] === "string") {
    //           list.push(files[i]);
    //         } else {
    //           look(files[i]);
    //         }
    //       }
    //
    //     }
    //   }
    // })(data);
    // return list;
  },

  permute: function(arr) {
    // Optional Challenge
  },

  fibonacci: function(n) {
    // Optional Challenge
    var list = [];

    for (var i = 0; i <= n; i++) {
      var listSize = list.length;
      var nextNum = list[listSize - 1] + list[listSize - 2]
      if (listSize === 0 || listSize === 1) {
        list.push(1);
      } else {
        list.push(nextNum);
      }
    }
    // return list[n - 1];
    //
    // var list = [1, 1];
    //
    // if (list.length >= n) {
    //   return list[n - 1];
    // } else {
    //   var nextNum = list[n - 1] + list[n - 2];
    //   list.push(nextNum)
    //   fibonacci();
    // }
  },

  validParentheses: function(n) {
    // Optional Challenge
  }
};
