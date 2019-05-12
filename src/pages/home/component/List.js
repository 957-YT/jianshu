import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style.js';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

class List extends PureComponent {

  render() {
    return (
      <div>
        {
          this.props.articleList.map((item, index) => {
            return (
              <Link key={index} to={'/detail/'+ item.get('id')}>
                <ListItem>
                  <img className='list-pic' src={item.get('imgUrl')} alt='list'/>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={this.props.getMoreList}>阅读更多</LoadMore>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.get('home').get('articleList')
  }
}


const mapDispatch = (dispatch) => {
  return {
    getMoreList() {
      axios.get('./api/homeList.json').then((res) => {
        const result = res.data.data;
        const action = {
          type: "add_article_list",
          articleList: result
        }
        dispatch(action)
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatch)(List);