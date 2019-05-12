import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './component/Topic.js'
import List from './component/List.js'
import Recommend from './component/Recommend.js'
import Writer from './component/Writer.js'
import axios from 'axios';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
 } from './style.js'

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
      <HomeLeft>
        <img alt='banner' className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4642/c6beed73f461bcfc869721a35c7c6eee32137740.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
        <Topic></Topic>
        <List></List>
      </HomeLeft>
      <HomeRight>
        <Recommend></Recommend>
        <Writer></Writer>
      </HomeRight>
      {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillMount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }
  

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }

  handleScrollTop () {
    window.scrollTo(0,0)
  }
}
  

  const mapState = (state) => {
    return {
      showScroll: state.get('home').get('showScroll')
    }
  }

  const mapDispatch = (dispatch) => {
    return {
      changeHomeData() {
        axios.get('/api/home.json').then((res) => {
          const result = res.data.data;
          const action = {
            type: 'change_home_data',
            topicList: result.topicList,
            articleList: result.articleList,
            recommendList: result.recommendList,
            writerList: result.writerList
          }
          dispatch(action)
        })
      },
      changeScrollTopShow() {
        if(document.documentElement.scrollTop>100){
          const action = {
            type: 'show_scroll_top',
            showScroll: true
          }
          dispatch(action);
        }else {
          const action = {
            type: 'show_scroll_top',
            showScroll: false
          }
          dispatch(action);
        }
      }
    }
  }

  export default connect(mapState,mapDispatch)(Home);