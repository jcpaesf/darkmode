import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGalacticRepublic, faRebel } from '@fortawesome/free-brands-svg-icons'

import {
  Content,
  Checkbox,
  Label,
  Image,
} from './styles'

const App = () => {
  return (
    <div>
      <Checkbox id="check" />
      <Content className="content">
        <Label htmlFor="check" className="label">
          <FontAwesomeIcon color="#111111" icon={faGalacticRepublic} />
          <FontAwesomeIcon color="#f0f0f0" icon={faRebel} />
          <span className="ball"></span>
        </Label>

        <Image>
          <FontAwesomeIcon icon={faGalacticRepublic} />
          <FontAwesomeIcon icon={faRebel} />
        </Image>
      </Content>
    </div>
  );
}

export default App;