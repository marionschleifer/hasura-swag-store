import {graphql} from 'gatsby'
import React from 'react'

export default ({data}) => (
  <div>
    <h1>Products</h1>
    <div>
      {data.hasura.products.map((product, index) => (
        <div key={index}>
          <h4>{product.name}</h4>
          <p>{product.unit_price}</p>
        </div>
      ))}
    </div>
  </div>
)

export const query = graphql`
  query {
    hasura {
      products {
        name
        unit_price
      }
    }
  }
`
