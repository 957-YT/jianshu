import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItme } from '../style.js';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
    render() {
      return (
       <RecommendWrapper>
         {
           this.props.recommendList.map((item) => {
             return <RecommendItme key={item.get('id')} imgUrl= {item.get('imgUrl')}></RecommendItme>
           })
         }
       </RecommendWrapper>
      );
    }
  }
  
  const  mapStateToProps = (state) => {
   return {
    recommendList: state.get('home').get('recommendList')
   }
  }

  export default connect(mapStateToProps,null)(Recommend);