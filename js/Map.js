const m1 = new Map([
  [1, "first"],
  [3, "third"],
]);
const myKeys = [...m1.keys()];
console.log("MapKeyIterator: ", myKeys);
const myValues = [...m1.values()];
console.log("MapKeyIterator: ", myValues);
console.log("m1.size: ", m1.size);
m1.set(2, "second").delete(3);
console.log("m1", m1);
console.log("m1.has(2)", m1.has(2));
