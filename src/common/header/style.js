import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
	z-index: 1
	position: relative;
  height: 56px;
  border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.div`
	position:absolute;
	top:0;
	left:0;
	display:block;
	height: 56px;
	width: 100px;
	background: url(${logoPic});
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	padding-right: 50px;
	height: 100%;
	margin: 0 auto;
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	cursor: pointer;
	&.left{
		float:left;
	}
	&.right{
		float:right;
		color: #969696;
	}
	&.active{
		color: #ea6f5a;
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder:'搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	border: none;
	outline: none;
	border-radius: 19px;
	box-sizing: border-box;
	background-color: #eee;
	font-size: 14px;
	color: #666;
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		transition: all .5s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .5s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	left: 410px;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background-color: #fff
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	margin-left: 10px;
	margin-bottom: 10px;
	padding: 0 5px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;


export const Addtion = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;

export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border: 1px solid #ec6149;
	border-radius: 19px;
	font-size: 14px;
	&.reg{
		color: #ec6149;
	}
	&.writting{
		color: #fff;
		background-color: #ec6149;
	}
`;