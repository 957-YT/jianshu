import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import axios from 'axios';
import {
  DetailWrapper,
  DetailHeader,
  Content
} from './style';


class Detail extends PureComponent {

  render() {
    return (
      <DetailWrapper>
        <DetailHeader>{this.props.title}</DetailHeader>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }}></Content>
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}


const mapState = (state) => {
  return {
    title: state.get('detail').get('title'),
    content: state.get('detail').get('content')
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDetail(id) {
      axios.get('/api/detail.json?id='+ id).then((res) => {
        const result = res.data.data;
        const action = {
          type: 'change_detail',
          title: result.title,
          content: result.content
        }
        dispatch(action)
      })
    }
  }
}

export default connect(mapState, mapDispatch)(withRouter(Detail));