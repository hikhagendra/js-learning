function concat(arrays) {
    let totalLen = arrays.reduce((acc, value) => acc + value.length, 0);
    let merged = new Uint8Array(totalLen);
    let pos = 0;

    for(let arr of arrays) {
        for(let i = 0; i < arr.length; i++) {
            merged[pos] = arr[i];
            pos++;
        }
    }

    return merged;
}
  
let chunks = [
    new Uint8Array([0, 1, 2]),
    new Uint8Array([3, 4, 5]),
    new Uint8Array([6, 7, 8])
];
  
console.log(Array.from(concat(chunks))); // 0, 1, 2, 3, 4, 5, 6, 7, 8
  
console.log(concat(chunks).constructor.name); // Uint8Array