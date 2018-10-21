import React, { Component } from 'react';
import styled from 'styled-components';
import MenuIcon from './Components/MenuIconComponent';

const ButtonList = styled.div`
	flex-direction: Row;
	justify-content: space-around;
`;

class Navbar extends Component{
  render() {
    return(
			<ButtonList>
				<MenuIcon label='Men fashion' />
				<MenuIcon label='Woman fashion' />
				<MenuIcon label='Kids fashion' />
			</ButtonList>
    )
  };
};

export default Navbar;