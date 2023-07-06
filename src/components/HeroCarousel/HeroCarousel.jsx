import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import FeaturedItemCard from "../FeaturedItemCard/FeaturedItemCard"

const HeroCarousel = () => {
  const featuredItems = Array.from(Array(10).keys()) 
  const carouselItems = featuredItems.map(index => <FeaturedItemCard index={ index } key={ index } isMovie={ index % 2 === 0 ? true : false } />)

  const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
  return (
    <Carousel
      responsive={ responsive }
      autoPlay={ true }
      autoPlaySpeed={ 6000 }
      infinite={ true }
      arrows={ false }
    >
      { carouselItems }
    </Carousel>
  )
}

export default HeroCarousel