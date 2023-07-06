import entranceGif from '/wottuIn.gif'
import {EntranceContainer, EntranceImg } from './EntranceLoader.Styles';


const EntranceLoader = () => {
  return (
    <EntranceContainer>
      <EntranceImg src={ entranceGif } alt="" />
    </EntranceContainer>
  )
}

export default EntranceLoader