import React, {Component} from 'react'
import Hero from 'grommet/components/Hero'
import Box from 'grommet/components/Box'
import Headline from 'grommet/components/Headline'
import Image from 'grommet/components/Image'

export default class HomepageHero extends Component {
  render() {
    const { hero } = this.props
    const heroImg = (<Image src={ hero.backgroundImage.url } fit="cover"/>)
    return <Hero background={heroImg}>
      <Box
        direction='row'
        justify='center'
        align='center'
      >
        <Box
          basis='1/2'
          align='start'
          pad='medium'
        >
          <h1>
            <Headline size="medium" strong className="homepage__hero-text">
              {hero.title}
            </Headline>
          </h1>
          <h2>
            <Headline strong size="small" className="homepage__hero-text">
              {hero.subTitle}
            </Headline>
          </h2>
        </Box>
        <Box
          basis='1/2'
          align='start'
          pad='medium'
        >
          <iframe
            src={hero.videoUrl}
            width="100%"
            height="360"
            frameBorder="0"
            allowFullScreen
          />
        </Box>
      </Box>
    </Hero>
  }
}