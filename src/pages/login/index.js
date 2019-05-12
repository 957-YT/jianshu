import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';  
import { connect } from 'react-redux';
import axios from 'axios';
import {
 LoginWrapper,
 LoginBox,
 Input,
 Button
} from './style';


class Login extends PureComponent {

  render() {
    if(!this.props.loginState){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={(input) => {this.account = input}}></Input>
            <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}></Input>
            <Button onClick={() => this.props.login(this.account,this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      );
    }else {
      return <Redirect to='/'></Redirect>
    }
  }
}

const mapState = (state) => {
  return {
    loginState: state.get('login').get('login')
  }
}

const mapDispatch = (dispatch) => {
  return {
    login(accountElem,passwordElem) {
      axios.get('/api/login.json?account='+accountElem.value+'&password='+passwordElem.value).then((res) => {
      const result  = res.data.data;
      if(result){
        const action = {
          type: 'change_login',
          login: result
        }
        dispatch(action);
      }else{
        alert('登陆失败')
      }
        
      })

    }
  }
}

export default connect(mapState,mapDispatch)(Login);