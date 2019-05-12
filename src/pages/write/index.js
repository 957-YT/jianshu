import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';  
import { connect } from 'react-redux';


class Write extends PureComponent {

  render() {
    if(this.props.loginState){
      return (
        <div>写文章</div>
      );
    }else {
      return <Redirect to='/login'></Redirect>
    }
   
  }

}

const mapState = (state) => {
  return {
    loginState: state.get('login').get('login')
  }
}


export default connect(mapState,null)(Write);