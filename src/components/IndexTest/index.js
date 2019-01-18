import React,{ Component,Fragment } from 'react';
import shouldComponentUpdate from '../../common/shouldComponentUpdate';
import {
	Row,
	Col,
	Button,
	Icon
} from 'antd';

export default class IndexTest extends Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = shouldComponentUpdate;
	}
	render(){
		return <Fragment>
			<div className="search">
				<Row>
					<Col>
						aaa
					</Col>
				</Row>
			</div>
			<div className="pmain_show">
				<div className="common_area">
					<div className="table_title">
						<span className="title_txt">机构列表</span>
						<Button type="primary" style={{float:'right'}}><Icon type="plus" />添加机构</Button>
					</div>
					<div>
						bbb
					</div>
				</div>
			</div>
		</Fragment>
	}
}