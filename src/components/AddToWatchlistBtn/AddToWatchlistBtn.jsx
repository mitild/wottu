import {useState, useContext, useEffect} from 'react';
import { AddWLBtn, AddWLIcon, AddedText, AddedIcon } from "./AddToWatchlistBtn.Styles"
import { DataContext } from '../../context/Context'
import PropTypes from 'prop-types'
import { UserContext } from '../../context/userContext';

const AddToWatchlistBtn = ({ id, type, title, img, votes, size, font, text, justifytext }) => {
const [ added, setAdded ] = useState(false)
const [ disabledBtn, setDisabledBtn ] = useState('')
const { watchlist, setWatchlist } = useContext(DataContext)
const { userAge } = useContext(UserContext)


useEffect(() => {
  setDisabledBtn(userAge === '+18' ? false : true)
}, [])

const handleAddToWatchlistBtn = () => {
  setAdded(prev => !prev)
  const showExists = watchlist.find(show => show.id === id)
  const filteredWatchlist = watchlist.filter(show => show.id !== id)

  if(!showExists) {
    setWatchlist(prev => {
      return [
        ...prev,
        {
          id: id,
          type: type,
          title: title,
          img: img,
          hasImage: true,
          votes: votes
        }
      ]
    })
  }
  else {
    setWatchlist(filteredWatchlist)
  }

}

useEffect(() => {
  localStorage.setItem('watchlist', JSON.stringify(watchlist))
  const showExists = watchlist.find(show => show.id === id)
  return showExists ? setAdded(true) : setAdded(false)
}, [ watchlist ])

  return (
    <AddWLBtn
      onClick={ handleAddToWatchlistBtn }
      disabled={ disabledBtn }
      added={ added.toString() }
      size={ size }
      font={ font }
      text={ text }
      justifytext={ justifytext }
    >
      { 
        added 
        ? 
        <AddedText 
          is_disabled={ disabledBtn.toString() }>
          <AddedIcon is_disabled={ disabledBtn.toString() } />
          added to watchlist
        </AddedText>
        : 
        <AddWLIcon is_disabled={ disabledBtn.toString() } />
      }
    </AddWLBtn>
  )
}
AddToWatchlistBtn.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string,
  title: PropTypes.string,
  hasImage: PropTypes.bool,
  known: PropTypes.string,
  votes: PropTypes.number,
  size: PropTypes.string,
  font: PropTypes.string,
  text: PropTypes.string,
  justifytext: PropTypes.string
}  

export default AddToWatchlistBtn