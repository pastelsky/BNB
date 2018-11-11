import React, {Component} from 'react'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Image from 'grommet/components/Image'

export class TeamSection extends Component {
  render() {
    const { team } = this.props
    return <div id={team.id}>
      <Section>
      <Heading tag="h2">
        {team.title}
      </Heading>
      <Tiles
        fill={false}
        flush={false}
      >
        {team.members.map((member) => (
          <Tile key={member.name + member.photo.url} basis="1/4" alignSelf="start">
            <Image src={member.photo.url}/>
            <Heading tag="h4" strong>
              {member.name}
            </Heading>
            <Heading tag="h5">
              {member.name}
            </Heading>
          </Tile>
        ))}
      </Tiles>
    </Section>
    </div>
  }
}