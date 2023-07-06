import { useState } from 'react'
import PropTypes from 'prop-types'
import { Text, ShowMore } from './ShowMore.Styles'

const ShowMoreBtn = ({ text, textSize, textMedia, moreSize, moreMedia }) => {
  const [ showMore, setShowMore ] = useState(true)

  const handleShowMore = () => {
    setShowMore(prev => !prev)
  }

  return (
    <>
      <Text
        textsize={ textSize }
        textmedia={ textMedia }
      >
        { showMore ? `${text.substring(0, 100)}` : text} &nbsp;
        <ShowMore
        onClick={ handleShowMore }
        moresize={ moreSize }
        moresedia={ moreMedia }
      >
        { showMore ? '...more' : '...less'}
        </ShowMore>
      </Text>
    </>
  )
}
ShowMoreBtn.propTypes = {
  text: PropTypes.string.isRequired,
  textSize: PropTypes.number.isRequired,
  textMedia: PropTypes.number.isRequired,
  moreSize: PropTypes.number.isRequired,
  moreMedia: PropTypes.number.isRequired,
}

export default ShowMoreBtn