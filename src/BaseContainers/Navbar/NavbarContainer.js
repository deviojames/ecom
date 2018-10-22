import React, { Component } from 'react';
import styled from 'styled-components';
import Search from './Components/SearchComponent';
import MenuIcon from './Components/MenuIconComponent';
import { Row, Col, Icon } from 'antd';

const ButtonList = styled.div`
	flex-direction: row;
	justify-content: space-around;
`;
const LogoIcon = styled(Icon)`
	font-size: 40px;
	color: #FFFFFF;
`;
const DivLogo1 = styled.div`
`;
const DivLogo2 = styled.div`
	margin-top: 9px;
`;
const LogoText = styled.text`
	font-size: 32px;
	color: #FFFFFF;
`;
const RowHeader =styled(Row)`
	background: #CAA98A;
	padding-top: 30px;
`;
const RowHeader1 =styled.div`
	  display: flex;
    align-items: center;
    justify-content: center;
`;
const RowHeader2 =styled.div`
	  display: flex;
    align-items: center;
    justify-content: center;
`;
const DivHeader1 =styled.div`
	  display: flex;
    align-items: center;
    justify-content: center;
`;


class Navbar extends Component{
  render() {
    return(
			<div>
				<RowHeader>
					<RowHeader1>

						<Col span={4}>
							<DivHeader1>
								<DivLogo1>
									<LogoIcon type="shopping" theme="outlined" />
								</DivLogo1>
								<DivLogo2>
									<LogoText>Shopping</LogoText>
								</DivLogo2>
							</DivHeader1>
						</Col>

						<Col span={15}>
							<Search />
						</Col>

					</RowHeader1>

					<RowHeader2>

						<ButtonList>
							<MenuIcon label='Men fashion' />
							<MenuIcon label='Woman fashion' />
							<MenuIcon label='Kids fashion' />
						</ButtonList>
					
					</RowHeader2>					

				</RowHeader>
			</div>
    )
  };
};

export default Navbar;