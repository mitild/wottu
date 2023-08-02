import { db } from "../config/firebase"
import { getDocs, collection, addDoc } from 'firebase/firestore'

const watchlistCollectionRef = collection(db, 'watchlist')


const getUserWatchlist = async (setter) => {
  try {
    const data = await getDocs(watchlistCollectionRef)
    const filteredData = data.docs.map(doc => (
      {
        ...doc.data(),
        id: doc.id,
      }
    ))
    setter(filteredData)
  }
  catch (err) {
    alert(err)
  }
}


const addUserWatchlist = async (id, type, title, img, hasImage, votes) => {
  try {
    await addDoc(watchlistCollectionRef, {
      id: id,
      type: type,
      title: title,
      img: img,
      hasImage: true,
      votes: votes
    })
  }
  catch (err) {
    alert(err)
  }
}

export { getUserWatchlist, addUserWatchlist }