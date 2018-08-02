function uniqueInOrder(sequence) {
    //var  set1 = new Set(arry);
    var set1 = new Set(sequence)	
    return Array.from(set1)
}

console.log(uniqueInOrder("AAAABBBCCDAABBB")) // ["A", "B", "C", "D", "A", "B"])
console.log(uniqueInOrder("ABBCcAD"))  // ["A", "B", "C", "c", "A", "D"]
console.log(uniqueInOrder([1, 2, 2, 3, 3])) // [1, 2, 3]
console.log(uniqueInOrder("12333355555522211133")) // ["1", "2", "3", "5", "2", "1", "3"]