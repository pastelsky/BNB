import React, { Component } from 'react'

export default class FAQSection extends Component {
  render() {
    const {faqSection} = this.props
    return (
      <div className="section__content">
        <h2 className="section__heading">
          { faqSection.title }
        </h2>
        <ol className="faqSection">
          {
            faqSection.faqs.map((faq) => (
              <li key={ faq.question }>
                <h3>
                  <div dangerouslySetInnerHTML={ {__html: faq.question} }/>
                </h3>
                <div dangerouslySetInnerHTML={ {__html: faq.answer} }/>
              </li>
            ))
          }
        </ol>
      </div>
    )
  }
}