exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for(var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var sortedArr = arr.slice().sort();
    var results = [];
    for (var i = 0; i < arr.length - 1; i++) {
      if (sortedArr[i + 1] === sortedArr[i] && sortedArr[i - 1] !== sortedArr[i]) {
        results.push(sortedArr[i]);
      }
    }
    return results;
  },

  square : function(arr) {
    var squareArr = [];
    for (var i = 0; i < arr.length; i++) {
      squareArr.push(Math.pow(arr[i], 2));
    }
    return squareArr;
  },

  findAllOccurrences : function(arr, target) {
    var arrIndex = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        arrIndex.push(i);
      }
    }
    return arrIndex;
  }
};
