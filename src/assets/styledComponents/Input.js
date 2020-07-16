import styled from 'styled-components';
import {calculateVerticalSize, calculateHorisontalSize} from '../stylesheets/ResponsiveSize'

export const InputSection = styled.View`
  margin-top: ${calculateVerticalSize(0)};
  width: ${props => calculateHorisontalSize(props.width) || '100%' };
`

export const InputLabel = styled.Text`
  color: ${props => props.labelColor || 'rgba(255,255,255,0.75)'};
  font-size: ${calculateVerticalSize(13)};
  width: ${props => calculateHorisontalSize(props.width) || '100%' };
  margin-top: ${props => calculateVerticalSize(props.marginTop) || 0};
  font-weight: 300;
  font-family: ${props => props.labelFont || 'Poppins-Bold '};
`

export const TextInput = styled.TextInput`
  width: ${props => calculateHorisontalSize(props.width) || '100%' };
  height: ${props => calculateVerticalSize(props.height) || calculateVerticalSize(48) };
  background-color: ${props => props.backgroundColor || '#13192a' };
  font-size: ${ props => calculateHorisontalSize(props.fontSize) || calculateHorisontalSize(16) };
  font-weight: ${ props => props.fontWeight || 300 };
  font-family: Poppins-Regular;
  color: ${ props => props.color || '#fff' };
  padding: 0 ;
  padding-left: ${calculateHorisontalSize(10)};
  border-radius: ${props => props.radius || 10};
  margin-top: ${calculateVerticalSize(7)};
`

export const InputSuffix = styled.View`
  bottom: 0;
  align-items: center;
  background-color: ${props => props.backgroundColor || '#13192a' };
  justify-content: center;
  height: ${props => calculateVerticalSize(props.height) || calculateVerticalSize(48) };
  position: absolute;
  padding-right: 16px;
  padding-left: 6px;
  right: 0;
  border-radius: ${props => props.radius || 10};
`

export const ShowPasswordImage = styled.Image`
  height: ${props => calculateVerticalSize(props.height) || calculateVerticalSize(18) };
  width: ${props => calculateHorisontalSize(props.width) || calculateVerticalSize(12) };
`