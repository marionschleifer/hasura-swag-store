/* eslint-disable camelcase */
import React from 'react'
import {Header, Table} from 'semantic-ui-react'

export default ({description, material}) => (
  <div>
    <Header as="h3">About this product</Header>
    <Table celled>
      <Table.Header style={{background: '#f9fafb'}}>
        <Table.Row>
          <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>{description}</Table.Cell>
        </Table.Row>
        {material != null && (
          <Table.Row>
            <Table.Cell>Material</Table.Cell>
            <Table.Cell>{material}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  </div>
)
