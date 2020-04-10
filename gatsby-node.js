const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions

  return new Promise((resolve, reject) => {
    const productPageTemplate = path.resolve('src/templates/ProductPage.js')
    resolve(
      graphql(
        `
          {
            hasura {
              products {
                product_variants {
                  sku
                  name
                }
                name
                description
                material
                unit_price
                image_url
                id
                category {
                  name
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        result.data.hasura.products.forEach(product => {
          createPage({
            path: `/product/${product.id}/`,
            component: productPageTemplate,
            context: {
              id: product.id,
            },
          })
        })
      }),
    )
  })
}

exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    node: {fs: 'empty'},
  })
}
