import React, { Component,Fragment } from 'react';
import { 
	Button,
	Input,
	Icon
} from 'antd';
import './index.styl';
import LoginBg from '../../assets/images/login_bg.jpg';
import Syslogo from '../../assets/images/sys_logo.png';
import Loginpc from '../../assets/images/login_pc.png';
class Login extends Component {
	handleSubmit = ()=>{
    	this.props.history.push('/home');
  	}
    render() {
	    return (
	      <Fragment>
	        <div className="login_bg">
	          <img className="login_bg_pic" src={LoginBg} alt="" />
	          <div className="main">
	            <img className="sys_logo" src={Syslogo} alt="" />  
	            <img className="login_pc" src={Loginpc} alt="" />   
	            <div className="login_form">
	              <h4 className="form_header">用户登录 login</h4>
	              <div style={{margin:20}}>
		                <Input 
		                	placeholder="请输入用户名" 
		                	size="large"
		                	prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
		                />
		                <Input 
		                	placeholder="请输入用户名" 
		                	size="large"
		                	style={{margin:'20px 0'}}
		                	prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
		                />
		              	<Button block size="large" type="primary" onClick={this.handleSubmit}>确定</Button>
	              </div>
	            </div>
	          </div>
	        </div>
	        <div className="copyright">
	          Copyright © 2018-2099 北京资采<br/>All Rights Reserved 北京资采
	        </div>
	        
	      </Fragment>
	    );
    }
}

export default Login;