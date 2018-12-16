import React, { Component } from 'react'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Image from 'grommet/components/Image'

export default class HowItWorksSection extends Component {
  render() {
    const {partners} = this.props

    if (!partners.partners.length) {
      return null
    }

    return (
      <div className="section__content">
        <h2 className="section__heading">
          { partners.title }
        </h2>
        <div>
          <Tiles
            fill={ false }
            flush={ false }
          >
            { partners.partners.map((partner) => (
              <Tile key={ partner.url } basis="1/4" alignSelf="start">
                <Image src={ partner.url }/>
              </Tile>
            )) }
          </Tiles>
        </div>
      </div>
    )
  }
}