import { ModalVideoContainer, Video, VideoModalCLoseBtn, CloseIcon } from "./VideoTrailer.Styles"
import useGetTrailer from "../../api/useGetTrailers"
import PropTypes from 'prop-types'

const VideoTrailer = ({ id, type, show, setter }) => {
  
  const trailerId = useGetTrailer(id, type)
    if (!show) {
    return null;
  }
  console.log(trailerId)
  const handleCloseBtn = () => {
    setter(false)
  }

  const playerOptions = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      controls: 2,
      cc_load_policy: 0,
      fs: 0,
      iv_load_policy: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      frameborder: 0,
      origin: window.location.origin, 
      host: `${window.location.protocol}//www.youtube.com`,
      enablejsapi: 1
    }
  }
  return (
    <ModalVideoContainer>
      <VideoModalCLoseBtn
        show={ show.toString() }
        onClick={ handleCloseBtn }
      >
        <CloseIcon />
      </VideoModalCLoseBtn>

      <Video 
        videoId={ trailerId.trailer } 
        id="YTVideo"
        iframeClassName="trailer"
        allow="encrypted-media"
        opts={ playerOptions } 
      />
    </ModalVideoContainer>
  )
}
VideoTrailer.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  setter: PropTypes.any
}
export default VideoTrailer