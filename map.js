var evenNumbers = new Map([['two', 2], ['four', 4], ['six', 6]]);
var itr1 = evenNumbers.entries();
console.log(itr1);
for (var _i = 0, itr1_1 = itr1; _i < itr1_1.length; _i++) {
    var entry = itr1_1[_i];
    console.log(entry);
}
