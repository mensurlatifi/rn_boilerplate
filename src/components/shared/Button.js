import React from 'react';
import {Button, ButtonText} from '../../assets/styledComponents/Button';
  
const ButtonComponent = (props) => { 
  var {label, onPress, icon} = props;
  return (
    <Button {...props} onPress={onPress}>
      { icon && icon }
      <ButtonText {...props}>
        { label } 
      </ButtonText>
    </Button>
  )
}

export default ButtonComponent

