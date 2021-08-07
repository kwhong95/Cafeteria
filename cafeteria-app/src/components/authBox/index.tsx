import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormsContainer,
  LoginAndResister,
  Form,
  PanelsContainer,
} from './elements'
import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from "@fortawesome/fontawesome-svg-core";

const userIcon: IconLookup = { prefix: 'fas', iconName: 'user' }
const userIconDefinition: IconDefinition = findIconDefinition(userIcon)

const lockIcon: IconLookup = { prefix: 'fas', iconName: 'lock' }
const lockIconDefinition: IconDefinition = findIconDefinition(lockIcon)

const AuthBox: React.FunctionComponent = () => {
  return (
    <FormsContainer>
      <LoginAndResister>

      </LoginAndResister>

      <PanelsContainer>

      </PanelsContainer>

    </FormsContainer>
  )
}

export default AuthBox;