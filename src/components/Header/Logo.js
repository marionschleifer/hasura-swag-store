import React from 'react'
import {Image} from 'semantic-ui-react'

import hasura_logo from '../../images/logo.png'

const Logo = () => (
  <Image
    size="mini"
    src={hasura_logo}
    style={{marginRight: '1.5em'}}
    alt="I love Lamp"
  />
)

export default Logo
