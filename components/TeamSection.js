import React, { Component } from 'react'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Image from 'grommet/components/Image'

export default class TeamSection extends Component {
  render() {
    const {team} = this.props
    return <div className="section__content">
      <h2 className="section__heading">
        { team.title }
      </h2>
      <Tiles
        fill={ false }
        flush={ false }
      >
        { team.members.map((member) => (
          <Tile key={ member.name + member.photo.url } basis="1/4" alignSelf="start">
            <Image src={ member.photo.url }/>
            <Heading tag="h4" strong>
              { member.name }
            </Heading>
            <Heading tag="h5">
              { member.name }
            </Heading>
          </Tile>
        )) }
      </Tiles>
    </div>
  }
}