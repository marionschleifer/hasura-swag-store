/* eslint-disable */
import React from 'react'
import {graphql} from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'
import ProductSummary from '../components/ProductSummary'
import ProductAttributes from '../components/ProductAttributes'
import Layout from '../components/Layout'

class ProductPageTemplate extends React.PureComponent {
  render() {
    const productInfo = get(this, 'props.data.hasura.products')
    const data = productInfo[0]
    const image = data.image_url
    const product = {
      ...data,
      id: data.id,
      mainImage: image,
      unitPrice: data.unit_price,
      category: data.category.name,
      description: data.description,
      header: data.name,
    }

    return (
      <Layout location={this.props.location}>
        <ProductSummary {...product} />
        <ProductAttributes {...product} />
      </Layout>
    )
  }
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query ProductsQuery($id: HASURA_uuid!) {
    hasura {
      products(where: {id: {_eq: $id}}) {
        product_variants {
          sku
          name
        }
        name
        description
        unit_price
        image_url
        id
        category {
          name
        }
      }
    }
  }
`
