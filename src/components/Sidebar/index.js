import React,{Component,Fragment} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import shouldComponentUpdate from '../../common/shouldComponentUpdate';
import Axios from '../../axios';
import './index.styl';
class Sidebar extends Component{
	constructor(props){
		super(props);
		//每个组件必须引入此方法
		this.shouldComponentUpdate = shouldComponentUpdate;
	}
	state = {
		sidebarList : [],
		navIndex:0,
	}
	handleSidebarClick = (e)=>{
		var navIndex = Number(e.target.getAttribute("index"));
		this.setState({ navIndex });
	}
	componentDidMount(){
		Axios.ajax({
			url:'/sidebar_list'
		}).then((res)=>{
			if(res.code === 200){
				this.setState({
					sidebarList:res.data.list
				})
			}
		})
	}
	render() {
		return (
			<Router>
				<Fragment>
					<div className="psidebar">
						<div className="psidebarinner">
							<div className="sidebar_list">
								<ul onClick={this.handleSidebarClick}>
									{
										this.state.sidebarList.map((item,index)=>{
											return  <li key={item.id} className={item.className+" "+(this.state.navIndex===index?"active":"")}>
														<Link to={item.href}>
															<span index={index}>{item.name}</span>
														</Link>
													</li>
										})
									}
								</ul>
							</div>
						</div>
					</div>
					<div className="pmain_con">
						<div className="pmainconinner">
							{this.props.children}
						</div>
					</div>
				</Fragment>
			</Router>
		)
	}
}

class SidebarList extends Component{
	handleSidebarClick = ()=>{

	}

	render(){
		return  <ul onClick={this.handleSidebarClick}>
					{this.props.map((item)=>{

					})}
				</ul>
	}
}

export default Sidebar;