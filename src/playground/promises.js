const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promeise resolved')
    }, 1500)

})

console.log('before')

promise.then((data) => {
    console.log('1', data)
    return 'some data'
}).then((data) => {
    console.log('Does this run', data)
}).catch((error) => {
    console.log(error)
})

console.log('after')