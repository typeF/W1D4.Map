var words = ["ground", "control", "to", "major", "tom"];

var length = function(word) {
  return word.length;
};

var upperCase = function(word) {
  return word.toUpperCase();
};

var backwards = function(word) {
  return word.split('').reverse().join('');
};

function mapClone(collection, func){
  var newArr = [];
  collection.forEach(function(element){
    newArr.push(func(element));
  });
  console.log(newArr)
}

mapClone(words, length);
mapClone(words, upperCase);
mapClone(words, backwards);