import React, { Component } from 'react'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'

export class HowItWorksSection extends Component {
  render() {
    const {howItWorks} = this.props
    return (
      <div id={ howItWorks.id }>
        <Section>
          <Heading tag="h2">
            { howItWorks.title }
          </Heading>
          <div>
            <Box direction="row">
              { howItWorks.steps.map((step) => (
                <Card
                  textSize="small"
                  key={ step.title }
                  thumbnail={ step.photo.url }
                  label={ step.stepLabel }
                  heading={ step.title }
                  description={ <span dangerouslySetInnerHTML={ {__html: step.description} }/> }
                  contentPad='none'
                />
              )) }
            </Box>
          </div>
        </Section>
      </div>
    )
  }
}