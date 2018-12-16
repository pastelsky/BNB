import React from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

const photos = [
  {src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3},
  {src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1},
  {src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4},
  {src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4},
  {src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4},
  {src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3},
  {src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4},
  {src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3},
  {src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3}
]


export default class GallerySection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentImage: 0}
  }

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  render() {
    const {title, images} = this.props
    const thumbs = images.map(image => ({...image, src: image.src + '?w=600'}))

    if (!images.length) {
      return null
    }

    return (
      <div className="section__content">
        <h2 className="section__heading">
          { title }
        </h2>
        <div>
          <Gallery photos={ thumbs } onClick={ this.openLightbox }/>
          <Lightbox
            images={ images }
            onClose={ this.closeLightbox }
            onClickPrev={ this.gotoPrevious }
            onClickNext={ this.gotoNext }
            currentImage={ this.state.currentImage }
            isOpen={ this.state.lightboxIsOpen }
          />
        </div>
      </div>
    )
  }
}
