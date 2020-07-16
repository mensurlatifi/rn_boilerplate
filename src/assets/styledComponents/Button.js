import styled from 'styled-components';
import {calculateVerticalSize, calculateHorisontalSize} from '../stylesheets/ResponsiveSize'

export const Button = styled.TouchableOpacity`
  width: ${props => calculateHorisontalSize(props.width) || '100%' };
  height: ${props => calculateVerticalSize(props.height) || calculateVerticalSize(52) };
  background-color: ${props => props.backgroundColor || '#ff0844' };
  border-width: ${ props => props.borderWidth || 0 };
  border-color: ${ props => props.borderColor || 'transparent' };
  border-radius: ${props=> props.borderRadius || 10};
  flex-direction: row;
  align-items: center;
  align-self:${props => props.alignSelf || 'auto'};
  justify-content: center;
  margin-top: ${props => calculateVerticalSize(props.marginTop) || 0};
  margin-bottom: ${props=> calculateVerticalSize(props.marginBottom) || 0}
`

export const ButtonText = styled.Text`
  font-size: ${props=> calculateHorisontalSize(props.Fontsize) || calculateHorisontalSize(16) };   
  color: ${props => props.color || '#ffff' };
  font-family: 'Poppins-Regular';
`