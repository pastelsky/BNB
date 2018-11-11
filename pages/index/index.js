import React, { Component } from 'react'
import Layout from '../../components/Layout'
import TeamSection from '../../components/TeamSection'
import TestimonialsSection from '../../components/TestimonialsSection'
import HowItWorksSection from '../../components/HowItWorksSection'
import HomepageHero from '../../components/HomepageHeroSection'
import { getHero, getHowItWorksSection, getTeamSection, getTestimonialsSection } from '../../utils/contentful'

import './index.scss'

const homepage = {
  hero: {
    background: 'https://images.unsplash.com/photo-1509744445554-d5cdda81d0bd?ixlib=rb-0.3.5&s=9121f5af1a245817863c9a64ea71b1f5&auto=format&fit=crop&w=2850&q=80',
    title: 'Join us in reducing food waste',
    subtext: 'Here\'s a two line text that explains things better',
    video: 'https://player.vimeo.com/video/97589595?color=ffffff&title=0&byline=0&portrait=0',
  },
  howItWorks: {
    title: 'How it works',
    steps: [
      {
        img: 'https://image.flaticon.com/icons/svg/149/149444.svg',
        label: 'Step 1',
        title: 'Do something',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        img: 'https://image.flaticon.com/icons/svg/149/149444.svg',
        label: 'Step 2',
        title: 'Do something more',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        img: 'https://image.flaticon.com/icons/svg/149/149444.svg',
        label: 'Step 3',
        title: 'Do even more',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  },
  team: {
    title: 'The team',
    members: [
      {
        name: 'Name 1',
        photo: 'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
      },
      {
        name: 'Name 2',
        photo: 'https://d3iw72m71ie81c.cloudfront.net/male-5.jpg',
      },
      {
        name: 'Name 3',
        photo: 'https://d3iw72m71ie81c.cloudfront.net/male-77.jpg'
      },
      {
        name: 'Name 4',
        photo: 'https://d3iw72m71ie81c.cloudfront.net/female-20.jpeg'
      }
    ]
  },
  testimonials: {
    title: 'What others have to say...',
    items: [
      {
        img: 'https://image.flaticon.com/icons/svg/149/149444.svg',
        name: 'https://image.flaticon.com/icons/svg/149/149444.svg',
        designation: 'Step 1',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        img: 'https://image.flaticon.com/icons/svg/149/149444.svg',
        name: 'Step 2',
        designation: 'Do something more',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        img: 'https://image.flaticon.com/icons/svg/149/149444.svg',
        name: 'Step 3',
        designation: 'Do something more',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  },
}

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
    testimonialsSection: {
      testimonials: [],
    },
  }

  componentDidMount() {
    Promise.all([
      getHero(),
      getHowItWorksSection(),
      getTeamSection(),
      getTestimonialsSection(),
    ])
      .then(result => {
        const [hero, howItWorksSection, teamSection, testimonialsSection] = result
        this.setState({hero, howItWorksSection, teamSection, testimonialsSection})
      })
  }

  render() {
    const {hero, howItWorksSection, teamSection, testimonialsSection} = this.state
    return (
      <Layout>
        <HomepageHero hero={ hero }/>
        <HowItWorksSection howItWorks={ howItWorksSection }/>
        <TeamSection team={ teamSection }/>
        <TestimonialsSection testimonials={ testimonialsSection }/>
      </Layout>
    )
  }
}

export default Index