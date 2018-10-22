import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../assets';

const BtnLabel = styled.a`
  color: ${Colors.primary};
  padding: 0 10px;
  font-size: 20px;
  color: #FFFFFF;
`;

class MenuIcon extends Component{
  render() {
    const { label } = this.props;
    return(
      <BtnLabel>{label}</BtnLabel>
    )
  };
};

export default MenuIcon;