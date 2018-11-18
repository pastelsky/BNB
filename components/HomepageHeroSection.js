import React, { Component } from 'react'
import Hero from 'grommet/components/Hero'
import Box from 'grommet/components/Box'
import Headline from 'grommet/components/Headline'
import Image from 'grommet/components/Image'
import Button from 'grommet/components/Button'
import Header from 'grommet/components/Header'

export default class HomepageHero extends Component {
  render() {
    const {hero, logo} = this.props

    return <div style={ {backgroundImage: `url(${ hero.backgroundImage.url })`} } className="hero-section">
      <div className="hero-section__shade"/>
      <div className="hero-section__content section__content">
        <Image className="hero-section__logo" src={ logo.url }/>
        <div>
          <iframe
            src={ hero.videoUrl }
            width="100%"
            height="320"
            frameBorder="0"
            allowFullScreen
            className="hero-video"
          />
        </div>
        <div className="hero-section__text-section">
          <h1 className="hero-section__title">
            { hero.title }
          </h1>
          <h2 className="hero-section__sub-title">
            { hero.subTitle }
          </h2>
        </div>
      </div>
    </div>
  }
}