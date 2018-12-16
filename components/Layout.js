import React, { Component } from 'react'
import Head from 'next/head'
import App from 'grommet/components/App'
import Image from 'grommet/components/Image'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Footer from 'grommet/components/Footer'
import Paragraph from 'grommet/components/Paragraph'
import { Link } from 'react-scroll'

import 'grommet/scss/vanilla/index.scss'
import { getHeader } from '../utils/contentful'
import './Layout.scss'

function ScrollLink({scrollId, children, externalLink}) {
  if (externalLink) {
    return (
      <Anchor href={ scrollId || externalLink }>
        { children }
      </Anchor>
    )
  } else {
    return (
      <Link
        activeClass="header-link-container--active"
        to={ scrollId }
        spy={ true }
        smooth="easeOutQuart"
        duration={ 500 }
        className="header-link-container"
        isDynamic={ true }
      >
        <div className="header-blip"/>
        <Anchor href={ scrollId || externalLink } className="header-link">
          { children }
        </Anchor>
        <div className="header-bloop"/>
      </Link>
    )
  }
}

function Nav({headerLinks}) {
  return (
    <nav className="navigation">
      <Menu dropAlign={ {'right': 'right'} } direction="row">
        { headerLinks.map(link => (
          <ScrollLink
            key={ link.name }
            scrollId={ link.scrollId }
            externalLink={ link.externalLink }
          >
            { link.name }
          </ScrollLink>
        )) }
      </Menu>
    </nav>
  )
}

class Layout extends Component {
  state = {
    header: {
      logo: {},
      headerLinks: [],
    }
  }

  componentDidMount() {
    getHeader()
      .then((header) => {
        this.setState({header})
      })
  }

  render() {
    const {children} = this.props
    const {header} = this.state

    return (
      <div centered={ false }>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=PT+Serif:400,700" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400" rel="stylesheet"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Header className="header">
        </Header>
        <Nav headerLinks={ header.headerLinks }/>
        { children }
        <Footer justify='between'>
          <footer>
            © { new Date().getFullYear() } Bread and Butter
          </footer>
        </Footer>
      </div>
    )
  }
}

export default Layout