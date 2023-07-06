import { useContext, useState, useRef, useEffect } from 'react'
import { SearchMainWrapper, SearchInput, SearchContainer, CloseButton, CloseIcon, InputContainer, TagTitle, TagContainer, TitleAndTagContainer, TitleHighlight , SuggestedCardsWrapper, SearchForm } from "./SearchBar.Styles"
import SearchQuery from '../SearchQuery/SearchQuery'
import { DataContext } from '../../context/Context'
import SearchSuggestedCard from '../SearchSuggestedCard/SearchSuggestedCard'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [ searching, setSearching ] = useState(false)
  const { movieGenres, tvGenres, isLoading, setIsLoading } = useContext(DataContext)
  const searchInput = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(movieGenres.length === 0 || tvGenres.length === 0)
  }, [movieGenres, tvGenres])


  const  movieGenreBtn = movieGenres.map((genre, index) => <SearchQuery id={ genre.id } key={ index } genre={ genre.name } bg="movie" type="movie" />)
  const  tvGenreBtn = tvGenres.map((genre, index) => <SearchQuery id={ genre.id } key={ index } genre={ genre.name } bg="tv" type="tv" />)

  const handleSubmit = (e) => {
    e.preventDefault()
    const search = searchInput.current.value
    setSearching(false)
    const nameAsParam = search.split(' ').join('-')
    navigate(`/search-results/${ nameAsParam }`, {state: search})
  }

  const handleFocus = () => {
    setSearching(true)
  }

  const handleCloseBtn = () => {
    setSearching(false)
  }

  return (
    <SearchMainWrapper >
      <SearchForm onSubmit={ handleSubmit }>
      <InputContainer>
        <SearchInput 
            type='text'
            placeholder="Search Titles or Discover"
            onFocus={ handleFocus }
            autoComplete='off'
            searching={ searching.toString() }
            ref={ searchInput }
          />
      </InputContainer>
      </SearchForm>
      { searching &&
        <CloseButton
          onClick={ handleCloseBtn }
        >
          <CloseIcon />
        </CloseButton>
      }
      <SearchContainer
        searching={ searching.toString() }
        >
        <TitleAndTagContainer>
          <TagTitle>Discover <TitleHighlight color={'#ffb625'}>MOVIES</TitleHighlight> by genre</TagTitle>
          <TagContainer>
            { !isLoading && movieGenreBtn }
          </TagContainer>
        </TitleAndTagContainer>
        <TitleAndTagContainer>
          <TagTitle>Discover <TitleHighlight color={'#ffb625'}>SERIES</TitleHighlight> by genre</TagTitle>
          <TagContainer>
            { !isLoading && tvGenreBtn }
          </TagContainer>
        </TitleAndTagContainer>
        <SuggestedCardsWrapper>
          <SearchSuggestedCard
            text={ 'Trending Series' }
            type={'tv'}
            category={'trending'}
          />
          <SearchSuggestedCard
            text={ 'New Movies' }
            type={'movie'}
            category={'upcoming'}
          />
          <SearchSuggestedCard
            text={ 'Top Series' }
            type={'tv'}
            category={'top-series'}
          />
        </SuggestedCardsWrapper>
      </SearchContainer>

    </SearchMainWrapper>
  )
}

export default SearchBar