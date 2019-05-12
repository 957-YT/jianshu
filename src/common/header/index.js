import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable'
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addtion,
	Button
} from './style.js'

import { Link } from 'react-router-dom'

class Header extends Component {

	getListArea () {
		const jsList = this.props.list.toJS();
		const pageList = [];

		if(jsList.length){
		for (let i = (this.props.page-1) * 10; i < this.props.page*10; i++) {
			pageList.push(
				<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
			)
		}
	}
	
		if(this.props.focused || this.props.mouseIn) {
			return (
				<SearchInfo
					onMouseEnter={this.props.handleMouseEnter}
					onMouseLeave={this.props.handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={() => this.props.handleChangePage(this.props.page, this.props.totalPage)}>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null;
		}
	}


  render() {
    return(
			<HeaderWrapper>
			<Link to='/'>
				<Logo href='/'></Logo>
			</Link>
			<Nav>
				<NavItem className='left active'>首页</NavItem>
				<NavItem className='left'>下载App</NavItem>
				{
					this.props.login ? <NavItem onClick={this.props.loginOut} className='right'>退出</NavItem> : 
					<Link to='/login'>
						<NavItem className='right'>登陆</NavItem>
					</Link>
				}
				<NavItem className='right'>Aa</NavItem>
				<CSSTransition
					in={this.props.focused}
					timeout={500}
					classNames = 'slide'
				>
					<NavSearch
					className = {this.props.focused ? 'focused' : ''}
					onFocus = {() => this.props.handleInputFocus(this.props.list)}
					onBlur = {this.props.handleInputBlur}
					></NavSearch>
				</CSSTransition>
				{this.getListArea()}
			</Nav>
			<Addtion>
				<Link to='/write'>
					<Button className='writting'>写文章</Button>
				</Link>
				<Button className='reg'>注册</Button>
			</Addtion>
		
		</HeaderWrapper>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		focused: state.get('header').get('focused'),
		list: state.get('header').get('list'),
		page: state.get('header').get('page'),
		mouseIn: state.get('header').get('mouseIn'),
		totalPage: state.get('header').get('totalPage'),
		login: state.get('login').get('login')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			if(list.size===0){
				dispatch((dispatch) => {
					axios.get('/api/headerList.json').then((res) => {
						const data = res.data;
						const action = {
							type: 'change_list',
							data: fromJS(data.data),
							totalPage: Math.ceil(data.data.length / 10)
						}
						dispatch(action);
					}).catch(() => {
						alert('error');
					})
				});
			}
			const action = {
				type: 'search_focus'
			}
			dispatch(action);
		},
		handleInputBlur() {
			const action = {
				type: 'search_blur'
			}
			dispatch(action);
		},
		handleMouseEnter() {
			const action = {
				type: 'mouse_enter'
			}
			dispatch(action);
		},
		handleMouseLeave() {
			const action = {
				type: 'mouse_leave'
			}
			dispatch(action);
		},
		handleChangePage(page, totalPage) {
			if(page<totalPage){
				page = page+1;
				const action = {
					type: 'change_page',
					page
				}
				dispatch(action);
			}else {
				const action = {
					type: 'change_page',
					page:1
				}
				dispatch(action);
			}
		},
		loginOut() {
			const action = {
				type:'login_out',
				login: false
			}
			dispatch(action);
			alert('退出成功')
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)