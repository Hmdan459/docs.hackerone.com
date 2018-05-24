import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import GatsbyConfig from '../../gatsby-config'

import Header from '../components/header/header'

import '../fonts/effra.scss'
import '../css/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      defaultTitle={GatsbyConfig.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content:
            'Get instant answers to the most common questions and learn how to use HackerOne.',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:site_name',
          content: GatsbyConfig.siteMetadata.title,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: '@Hacker0x01',
        },
        {
          name: 'twitter:site',
          content: '@Hacker0x01',
        },
      ]}
      htmlAttributes={{lang: "en"}}
    />
    <Header />
    <div className="wrapper">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
