/* eslint-disable camelcase */
import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

const mapProductsToItems = products =>
  products.map(product => {
    const price = product.unit_price.formatted || null
    return {
      as: Link,
      to: `/product/${product.id}/`,
      childKey: product.id,
      // image: (
      //   <Image>
      //     <Img href={product.image_url} alt={product.name} />
      //   </Image>
      // ),
      header: product.name,
      meta: (
        <Card.Meta style={{color: 'dimgray'}}>{product.unit_price}</Card.Meta>
      ),
    }
  })

export default ({products}) => (
  <Card.Group items={mapProductsToItems(products)} itemsPerRow={2} stackable />
)
