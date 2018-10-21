import React, { Component } from 'react';
import styled from 'styled-components';
import Search from './Components/SearchComponent';
import MenuIcon from './Components/MenuIconComponent';

const ButtonList = styled.div`
	flex-direction: row;
	justify-content: space-around;
`;
const Logo = styled.img`

`;

class Navbar extends Component{
  render() {
    return(

			<div>
				<Logo src="https://vignette.wikia.nocookie.net/logopedia/images/b/b8/Levi%27s_logo.png/revision/latest/scale-to-width-down/640?cb=20130505012656" />
				<Search />
				<ButtonList>
					<MenuIcon label='Men fashion' />
					<MenuIcon label='Woman fashion' />
					<MenuIcon label='Kids fashion' />
				</ButtonList>
			</div>
			
    )
  };
};

export default Navbar;