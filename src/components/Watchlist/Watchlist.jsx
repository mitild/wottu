import { FlexContainer, CardsFlexWrapper, ResultsContainer } from "../ResultsCards/ResultCards.Styles"
import { WatchlistTitle } from "./Watchlist.Styles"
import ResultCard from '../ResultsCards/ResultCard'
import { useContext } from "react";
import { DataContext } from "../../context/Context"

const Watchlist = () => {
  const { watchlist } = useContext(DataContext)

  console.log('from watchlist component', watchlist)
  const watchlistItems = watchlist.map(({id, type, title, img, votes}, index) => {
    return (
      <ResultCard 
        key={ index }
        id={ id }
        type={ type }
        title={ title }
        img={ img }
        hasImage={ true }
        votes={ votes }
      />
    )
  })

  return (
    <FlexContainer>
      <WatchlistTitle>
        Your Watchlist
      </WatchlistTitle>
      <CardsFlexWrapper>
        <ResultsContainer>
          { watchlistItems }
        </ResultsContainer>
      </CardsFlexWrapper>
    </FlexContainer>
  )
}

export default Watchlist