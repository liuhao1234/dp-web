import React,{Component} from 'react';
import { Input, Form,Modal, message } from 'antd';

class Header extends Component{
	state = {
		username : "管理员",
		modalShow:false,
        usernameReal:""
	};
	
	render() {
		return (
			<div className="phead">
				<div className="head_con">
					<div className="left">
						<b>短信云后台系统</b>
					</div>
					<div className="right">
						<span className="user"><small>您好！{this.state.usernameReal}</small></span>
						<span><small>修改密码</small></span>
						<span className="exit"><small>退出</small></span>
						{/*<a href="/login" className="exit">退出</a>*/}
					</div>
				</div>
			</div>
		)
	}
}
export default Header;