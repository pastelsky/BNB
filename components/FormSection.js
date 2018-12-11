import React, { Component } from 'react'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Image from 'grommet/components/Image'

export default class FormSection extends Component {
  render() {
    return <div className="section__content form-section">
      <h2 className="section__heading">
        Reach out to us
      </h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc964LtxJxtRPkNJ75RX3E3fFo226v9uBAUYdkmo-ZtkhQZkQ/viewform?embedded=true"
        width="700" height="820" frameBorder="0" marginHeight="0" marginWidth="0">Loading...
      </iframe>
    </div>
  }
}