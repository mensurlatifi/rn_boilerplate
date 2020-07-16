import styled from 'styled-components';
import {calculateVerticalSize, calculateHorisontalSize} from '../stylesheets/ResponsiveSize'

const Text = styled.Text`
  color: ${props => (props.color) || 'white' };
  text-align: ${props=> (props.textAlign) || 'center'};
  font-size: ${props =>  calculateHorisontalSize(props.fontSize) || 0}; 
  font-family:'Poppins-Regular'; 
  margin-top:${props => calculateVerticalSize(props.marginTop) || 0};
  margin-bottom:${props => calculateVerticalSize(props.marginBottom) || 0};
  align-self:${props => (props.alignSelf) || 'auto'};
  margin-left:${props=> (props.marginLeft) || 0};
  margin-right:${props=> (props.marginRight) || 0};
  font-weight: ${props=> (props.fontWeight) || 'normal'};
  width: ${props => (props.width) || 'auto'}
`

export default Text;