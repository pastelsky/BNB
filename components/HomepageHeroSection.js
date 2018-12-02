import React, { Component } from 'react'
import Hero from 'grommet/components/Hero'
import Box from 'grommet/components/Box'
import Headline from 'grommet/components/Headline'
import Image from 'grommet/components/Image'
import Button from 'grommet/components/Button'
import Header from 'grommet/components/Header'
import Scroll from 'react-scroll'

export default class HomepageHero extends Component {
  handleKnowMoreClick = () => {
    const { howItWorksId } = this.props
    Scroll.scroller.scrollTo(howItWorksId, {
      duration: 400,
      smooth: true,
    })
  }
  render() {
    const {hero, logo} = this.props

    return <div style={ {backgroundImage: `url(${ hero.backgroundImage.url })`} } className="hero-section">
      <div className="hero-section__shade"/>
      <div className="hero-section__content section__content">
        <div className="hero-section__text-container">
          <Image className="hero-section__logo" src={ logo.url }/>
          <h1 className="hero-section__title">
            { hero.title }
          </h1>
          <h2 className="hero-section__sub-title">
            { hero.subTitle }
          </h2>
          <Button
            className="hero-section__know-more-btn"
            onClick={ this.handleKnowMoreClick } label="Know how" primary/>
          <div>
          </div>
        </div>
        <div className="hero-section__video-container">
          <iframe
            src={ hero.videoUrl }
            width="100%"
            height="500"
            frameBorder="0"
            allowFullScreen
            className="hero-video"
          />
        </div>
      </div>
    </div>
  }
}