import React, { Component } from 'react'
import cx from 'classnames'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'

export default class GenericExplainationSection extends Component {
  render() {
    const {title, body, image, className} = this.props
    return (
      <div className={cx("section__content", className)}>
        <h2 className="section__heading">
          { title }
        </h2>
        <div className="generic-exlplaination-section">
          <div className="generic-exlplaination-section__body">
            <p dangerouslySetInnerHTML={ {__html: body} }/>
          </div>
          <div className="generic-exlplaination-section__img">
            <img src={ image }/>
          </div>
        </div>
      </div>
    )
  }
}