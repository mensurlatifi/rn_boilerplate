import {TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {
  TextInput,
  InputSection,
  InputSuffix,
  ShowPasswordImage,
  InputLabel
} from '../../assets/styledComponents/Input';
import {calculateVerticalSize} from '../../assets/stylesheets/ResponsiveSize';

const Input = (props) => {
  var { 
    reference,
    returnKeyType,
    labelText,
    value
  } = props;

  return (
    <InputSection alignSelf='center'>
      { labelText &&
        <InputLabel 
          marginTop={calculateVerticalSize(props.marginTop)} 
          labelColor={props.labelColor} 
          labelFont={props.labelFont}>
          {labelText}
        </InputLabel>
      }
      <TextInput { ...props }
        value={value}
        autoCapitalize={"none"}
        returnKeyType =
          { returnKeyType ||  "next" }
        underlineColorAndroid="transparent"
        ref={(ref) => reference && reference(ref)}
        secureTextEntry={props.security}  
        onChangeText={props.onChangeText} 
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor || 'white'}
        maxLength={props.maxLength || 256}
      />
      {props.showPassword &&
        <InputSuffix height={props.height}>
          <TouchableWithoutFeedback onPress={props.onPress} >
          {props.other ? 
            <ShowPasswordImage source={props.source} width={15} />
            :
            <ShowPasswordImage source={props.source} 
                               height={props.iconHeight ? props.iconHeight  : 24}
                               width={props.iconWidth ? props.iconWidth :  24} />
          }
          </TouchableWithoutFeedback>
        </InputSuffix>
        }
    </InputSection>
  )
}

export default Input
