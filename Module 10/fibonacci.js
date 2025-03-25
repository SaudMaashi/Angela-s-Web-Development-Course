function fibonacciGenerator(n) {
    let arr = [];
    for (var i = 0; i < n; i++) {
        if (arr.length < 2) {
            arr.push(i);
        }
        else {
            x = arr[arr.length - 1] + arr[arr.length - 2];
            arr.push(x);
        }
    }
    return arr;
}