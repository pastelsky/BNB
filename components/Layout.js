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

import 'grommet/scss/vanilla/index.scss'
import { getHeader } from '../utils/contentful'

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
      <App>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Grand+Hotel" rel="stylesheet"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Header>
          <Image src={ header.logo.url }/>
          <Box
            flex={ true }
            justify='end'
            direction='row'
            responsive={ false }
          >
            <Menu dropAlign={ {'right': 'right'} } direction="row">
              { header.headerLinks.map(link => (
                <Anchor key={ link.name } href={ link.scrollId || link.externalLink }>
                  { link.name }
                </Anchor>
              )) }
            </Menu>
          </Box>
        </Header>
        { children }
        <Footer justify='between'>
          <Title>
            Title
          </Title>
          <Box direction='row' align='center' pad={ {'between': 'medium'} }>
            <Paragraph margin='none'>
              © { new Date().getFullYear() } Bread and Butter
            </Paragraph>
            <Menu direction='row' size='small' dropAlign={ {'right': 'right'} }>
              <Anchor href='#'>
                Support
              </Anchor>
              <Anchor href='#'>
                Contact
              </Anchor>
              <Anchor href='#'>
                About
              </Anchor>
            </Menu>
          </Box>
        </Footer>
      </App>
    )
  }
}

export default Layout