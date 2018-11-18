import React, { Component } from 'react'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Carousel from 'grommet/components/Carousel'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'

export default class TestimonialsSection extends Component {
  render() {
    const {testimonials} = this.props
    return <div className="section__content">
      <h2 className="section__heading">
          { testimonials.title }
        </h2>
        <Carousel>
          {
            testimonials.testimonials.map(testimonial => (
              <Box
                key={ testimonial.name }
                pad={ {horizontal: 'large', vertical: 'medium'} }
              >
                <Box
                  key={ testimonial.name }
                  pad={ {horizontal: 'large', vertical: 'medium'} }
                >
                  <Heading tag="h4">
                    { testimonial.name }
                  </Heading>
                  <Heading tag="h5">
                    { testimonial.subtext }
                  </Heading>
                  <Paragraph>
                    <span dangerouslySetInnerHTML={ {__html: testimonial.review} }/>
                  </Paragraph>
                </Box>
              </Box>
            ))
          }
        </Carousel>
      </div>
  }
}