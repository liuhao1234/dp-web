import React,{Component} from 'react';
import shouldComponentUpdate from '../../common/shouldComponentUpdate';
import logOut from '../../common/logOut';
import { 
	Input, 
	Form,
	Modal, 
	message 
} from 'antd';
const { confirm } = Modal;
class Header extends Component{
	constructor(props){
		super(props);
		//每个组件必须引入此方法
		this.shouldComponentUpdate = shouldComponentUpdate;
	}
	
	state = {
		username : "管理员",
		modalShow:false,
        usernameReal:""
	};

	handleLogout = ()=>{
		confirm({
		    title: '退出登录',
		    content: '您确定要退出登录么？',
		    onOk() {
        		logOut();
		    }
  		})
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
						<span className="exit" onClick={this.handleLogout}><small>退出</small></span>
						{/*<a href="/login" className="exit">退出</a>*/}
					</div>
				</div>
			</div>
		)
	}
}
export default Header;