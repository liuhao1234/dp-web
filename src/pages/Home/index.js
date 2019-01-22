import React,{Component} from 'react';
import shouldComponentUpdate from '../../common/shouldComponentUpdate';
import './index.styl';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

class Home extends Component{
	constructor(props){
		super(props);
		//每个组件必须引入此方法
		this.shouldComponentUpdate = shouldComponentUpdate;
	}
	render() {
		//console.log(this)
		return (
			<div className="root_wraper">
				<Header />
				<Sidebar>
					{this.props.children}
				</Sidebar>
			</div>
		);
	}
}

export default Home;