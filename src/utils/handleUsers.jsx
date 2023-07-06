// import { auth, db } from "../config/firebase"
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
// import { getDocs, collection, addDoc, serverTimestamp } from 'firebase/firestore'

// const signUp = async (email, password, setError) => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password)
//     // addNewUserData(userName, email, avatarUrl)
//   }
//   catch (err) {
//     setError('Signup', err.code)
//   }
// }

// const logIn = async (email, password, setError) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password)
//   }
//   catch (err) {
//     const error = err.code === 'auth/user-not-found' ? "Email is not in our DataBase" : "Wrong password"
//     setError(error)
//   }
// }

// const logOut = async () => {
//   try {
//     await signOut(auth)
//   }
//   catch (err) {
//     console.log('logout', err)
//   }
// }

// const usersCollectionRef = collection(db, 'users')

// const getUserData = async (callback) => {
//   try {
//     const snapshot = await getDocs(usersCollectionRef);
//     const data = snapshot.docs.map((doc) => doc.data());
//     callback(data);
//   }
//   catch (err) {
//     console.log('get user data', err)
//   }
// }


// const addNewUserData = async (userName, email, avatarUrl) => {
//   try {
//     const res = await addDoc(usersCollectionRef, {
//       userName: userName,
//       email: email,
//       avatarURL: avatarUrl,
//       timeStamp: serverTimestamp(),
//     })
//     console.log(res.id)
//   }
//   catch (err) {
//     console.log('addNewUserData', err)
//   }
// }

// export { signUp, logIn, logOut, usersCollectionRef, getUserData, addNewUserData }