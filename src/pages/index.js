import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import get from 'lodash/get'
import {Image, Header} from 'semantic-ui-react'
import ProductList from '../components/ProductList'
import SEO from '../components/SEO'
import logo from '../images/hasura_header.png'
import Layout from '../components/Layout'

const StoreIndex = ({location}) => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
      hasura {
        products {
          id
          name
          description
          material
          unit_price
          image_url
          category {
            name
          }
          product_variants {
            name
          }
        }
      }
    }
  `)

  const siteTitle = get(data, 'site.siteMetadata.title')
  const products = get(data, 'hasura.products')
  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
      <Header
        as="h3"
        icon
        textAlign="center"
        style={{
          marginBottom: '2em',
        }}
      >
        <Header.Content
          style={{
            width: '60%',
            margin: '0 auto',
          }}
        >
          <Image src={logo} alt="logo" />
        </Header.Content>
      </Header>
      <ProductList products={products} />
    </Layout>
  )
}

export default StoreIndex
