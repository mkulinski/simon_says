function diffArray(arr1, arr2) {
    var comboArray = arr1.concat(arr2);

    function testArr1(num) {
        if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1){
            return num;
        }
    }

    return comboArray.filter(testArr1);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
