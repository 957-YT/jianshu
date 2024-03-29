import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style.js'

class Topic extends PureComponent {
    render() {
      return (
        <TopicWrapper>
          {
            this.props.topicList.map((item) => {
              return (
                <TopicItem key={item.get('id')}>
                <img className='topic-pic' src={item.get('imgUrl')}  alt='top'/>
                {item.get('title')}
              </TopicItem>
              )
            })
          }
         
        </TopicWrapper>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      topicList: state.get('home').get('topicList')
    }
  }

  export default connect(mapStateToProps, null)(Topic);