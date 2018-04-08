let arr = [['a', 'a', 'a'], ['a', 'a'], ['a', 'a', 'a', 'a'], ['a'], ['a', 'a', 'a', 'a', 'a', 'a']]

let resultArray = []
if (typeof arr == "undefined" || arr === null || arr.length === null || arr.length === 0) {

} else {
    arr.sort((a, b) => a.length > b.length)
        .map(array => {
            if ((typeof array != "undefined" || array != null || array.length != null || array.length > 0) && array.length !== arr.indexOf(array) + 1) {
                resultArray.push(arr.indexOf(array) + 1)
            }
        })
}




console.log(resultArray[0] ? resultArray[0] : 0)

