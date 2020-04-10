import React from 'react'

import {Item, Label} from 'semantic-ui-react'

import AddToCart from '../AddToCart'

export default ({id, name, mainImage, unitPrice, category}) => (
  <Item.Group>
    <Item style={{alignItems: 'center'}}>
      <Item.Image size="medium" src={mainImage}></Item.Image>
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Description>
          <Label>{category}</Label>
          <p>$ {unitPrice}</p>
        </Item.Description>
        <Item.Extra>
          <AddToCart productId={id} />
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)
