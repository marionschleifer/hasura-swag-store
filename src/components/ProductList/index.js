/* eslint-disable camelcase */
import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'gatsby'

const mapProductsToItems = products =>
  products.map(product => {
    const variants = []
    product.product_variants.forEach(element => {
      variants.push(element.name)
    })
    console.log(variants)

    return {
      as: Link,
      to: `/product/${product.id}/`,
      childKey: product.id,
      image: <Image src={product.image_url} size="large" />,
      header: product.name,
      meta: (
        <Card.Meta style={{color: 'dimgray'}}>
          {variants.length != 0 && 'Available in: ' + variants}
          <br></br>
          {'Price: $' + product.unit_price}
        </Card.Meta>
      ),
    }
  })

export default ({products}) => (
  <Card.Group items={mapProductsToItems(products)} itemsPerRow={2} stackable />
)
