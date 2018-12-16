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
  getPartnersSection, getFAQsSection, getGallerySection
} from '../../utils/contentful'
import { Element } from 'react-scroll'

import './index.scss'
import FormSection from '../../components/FormSection'
import PartnersSection from '../../components/PartnersSection'
import FAQSection from '../../components/FAQSection'
import GallerySection from '../../components/GallerySection'


class Index extends Component {
  state = {
    links: [],
    hero: {
      backgroundImage: {}
    },
    howItWorksSection: {
      steps: []
    },
    teamSection: {
      members: [],
    },
    faqSection: {
      faqs:[],
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
      getHowItWorksSection(),
      getTeamSection(),
      getFAQsSection(),
      getGallerySection(),
      getPartnersSection(),
    ])
      .then(result => {
        const [hero, header, howItWorksSection, teamSection, faqSection, gallery, partnersSection] = result
        this.setState({hero, header, howItWorksSection, teamSection, faqSection, gallery, partnersSection})
      })
  }

  render() {
    const {hero, header, howItWorksSection, teamSection, faqSection, gallery, partnersSection} = this.state
    return (
      <Layout>
        <Element name="home">
          <HomepageHero hero={ hero } logo={ header.logo } howItWorksId={ howItWorksSection.id }/>
        </Element>
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