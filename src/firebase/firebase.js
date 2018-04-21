import * as firebase from 'firebase';
// import expenses from '../tests/fixtures/expenses'


const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};


firebase.initializeApp(config);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database }

// // database.ref('expenses').push(expenses[0])

// // database.ref('expenses').push(expenses[1])

// // database.ref('expenses').push(expenses[2])


// const onValueChange = (snapshot) => {
//     const expenses = []
//     snapshot.forEach(expense => {
//         expenses.push({
//             id: expense.key,
//             ...expense.val()
//         })
//     })

//     console.log(expenses)
// }

// const errorHandler = (error) => {
//     console.log(error)
// }

// database.ref('expenses').on('value', onValueChange, errorHandler)
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })


// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })


// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })


// // const onValueChange = (snapshot) => {
// //     const val = snapshot.val()
// //     console.log(val.name)
// // }

// // const errorHandler = (error) => {
// //     console.log(error)
// // }

// // database.ref().on('value', onValueChange, errorHandler)

// // setTimeout(() => {
// //     database.ref().set({
// //         name: 'Simas Stasytis',
// //         age: 22,
// //         location: {
// //             city: 'Vilnius',
// //             country: 'Lithuania'
// //         }
// //     })

// //     database.ref('attributes').set({
// //         weight: 85,
// //         height: 185
// //     }).then((data) => {
// //         console.log('Data is saved')
// //     }).catch((error) => {
// //         console.log(error)
// //     })

// //     database.ref('attributes/weight').remove()
// //         .then(function () {
// //             console.log("Remove succeeded.")
// //         })
// //         .catch(function (error) {
// //             console.log("Remove failed: " + error.message)
// //         });


// //     database.ref().update({
// //         sportas: 'running',
// //         'attributes/weight': 250
// //     })

// // }, 3000)




// // setTimeout(() => {
// //     database.ref().off()
// // }, 6000)
