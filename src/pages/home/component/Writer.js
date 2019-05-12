import React, { PureComponent } from 'react';
import { WriterWrapper,WriterInfo,WriterItem } from '../style.js'
import { connect } from 'react-redux';

class Writer extends PureComponent {
    render() {
      return (
       <WriterWrapper>
         推荐作者
         {
         this.props.writerList.map((item) => {
            return (
              <WriterItem key={item.get('id')}>
              <img
              className='writer-pic'
              src= {item.get('imgUrl')}
              alt={item.get('author')+item.get('desc')}
              />
              <WriterInfo>
                <span className='title'>{item.get('author')}</span>
                <p className='desc'>{item.get('desc')}</p>
              </WriterInfo>
              </WriterItem>
            )
          })
         }
       </WriterWrapper>
      );
    }
  }


  const mapStateToProps = (state) => {
    return {
      writerList: state.get('home').get('writerList')
    }
  }
  
  
  export default connect(mapStateToProps, null)(Writer);