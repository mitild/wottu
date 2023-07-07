import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import CategoryCard from "./CategoryCard"
import { CatCarouselContainer, CatCarouselTitle } from './CategoryCarousel.Styles'
import PropTypes from 'prop-types'


const CategoryCarousel = ({ isType, title, shows }) => {
  if (!shows) {
    return <p>loading...</p>
  }

  const categoryCards = shows.map((show, index) => {
    return (
      <CategoryCard
        key={ show.id } 
        index={ index } 
        id={ show.id } 
        isType={ isType }
        shows={ show }
      />
    )
  })

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
      slidesToSlide: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 5 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 3 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      slidesToSlide: 3 
    }
}
  return (
    <CatCarouselContainer>
      <CatCarouselTitle>{ title }</CatCarouselTitle>
      <Carousel
        itemClass="carouselItem"
        responsive={responsive}
        infinite={true}
        partialVisible={false}
        swipeable={true}
        draggable={true}
        transitionDuration={100}
      >
        { categoryCards }
      </Carousel>
    </CatCarouselContainer>
  )
}
CategoryCarousel.propTypes = {
  isType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shows: PropTypes.array
}

export default CategoryCarousel