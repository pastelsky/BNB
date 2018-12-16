import React, { Component } from 'react'
import Layout from '../../components/Layout'
import TeamSection from '../../components/TeamSection'
import TestimonialsSection from '../../components/TestimonialsSection'
import HowItWorksSection from '../../components/HowItWorksSection'
import HomepageHero from '../../components/HomepageHeroSection'
import {
  getHeader,
  getHero,
  getHowItWorksSection,
  getTeamSection,
  getPartnersSection, getFAQsSection, getGallerySection, getExplainationSections
} from '../../utils/contentful'
import { Element } from 'react-scroll'

import './index.scss'
import FormSection from '../../components/FormSection'
import PartnersSection from '../../components/PartnersSection'
import FAQSection from '../../components/FAQSection'
import GallerySection from '../../components/GallerySection'
import GenericExplainationSection from '../../components/GenericExplainationSection'


class Index extends Component {
  state = {
    links: [],
    hero: {
      backgroundImage: {}
    },
    explanations: [],
    teamSection: {
      members: [],
    },
    faqSection: {
      faqs: [],
    },
    partnersSection: {
      partners: [],
    },
    header: {
      logo: {},
      headerLinks: [],
    },
    gallery: {
      images: []
    }
  }

  componentDidMount() {
    Promise.all([
      getHero(),
      getHeader(),
      getExplainationSections(),
      getTeamSection(),
      getFAQsSection(),
      getGallerySection(),
      getPartnersSection(),
    ])
      .then(result => {
        const [hero, header, explanations, teamSection, faqSection, gallery, partnersSection] = result
        this.setState({hero, header, explanations, teamSection, faqSection, gallery, partnersSection})
      })
  }

  render() {
    const {hero, header, explanations, teamSection, faqSection, gallery, partnersSection} = this.state
    console.log('explanations', explanations)
    return (
      <Layout>
        <Element name="home">
          <HomepageHero hero={ hero } logo={ header.logo } howItWorksId={ explanations.length && explanations[0].id }/>
        </Element>
        { explanations.map(explanationSection => (
          <Element key={ explanationSection.id } name={ explanationSection.id }>
            <GenericExplainationSection
              className={explanationSection.id}
              title={ explanationSection.title }
              body={ explanationSection.body }
              image={ explanationSection.image }
            />
          </Element>
        )) }
        <Element name="form-section">
          <FormSection/>
        </Element>
        <Element name={ partnersSection.id }>
          <PartnersSection partners={ partnersSection }/>
        </Element>
        <Element name={ faqSection.id }>
          <FAQSection faqSection={ faqSection }/>
        </Element>
        <Element name={ gallery.id }>
          <GallerySection title={ gallery.title } images={ gallery.images }/>
        </Element>
        <Element name={ teamSection.id }>
          <TeamSection team={ teamSection }/>
        </Element>
        {/*<Element name={ testimonialsSection.id }>*/ }
        {/*<TestimonialsSection testimonials={ testimonialsSection }/>*/ }
        {/*</Element>*/ }
      </Layout>
    )
  }
}

export default Index