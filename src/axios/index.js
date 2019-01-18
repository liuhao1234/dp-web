import axios from 'axios';
import { Modal, message } from 'antd';
import logOut from '../common/logOut';
import serverUrl from './serverUrl';

message.config({
  duration: 2,
  maxCount: 1,
});
//Utils.logOut();
export default class Axios {
	static ajax(options){
		const baseURL = serverUrl;
		//const baseURL = "http://localhost:9696/";
		const token = sessionStorage.getItem("beautifulGirl");
		
		return new Promise((resolve,reject)=>{
			axios({
				method:'post',
				baseURL,
				url:options.url,
				data:options.data,
				headers:{
					'Content-Type': 'application/json',
					token
				}
			}).then((response)=>{
				//console.log(response)
				if(response.status === 200){//http返回的200
					let res = response.data;
					if(res.code === 200){//code是501的时候请求超时
						resolve(response.data);
						sessionStorage.setItem("beautifulGirl",res.token);
					}else if(res.code === 501){
						Modal.info({
						    title: '退出登录',
						    content: res.message,
						    onOk:() => {
						    	logOut();
						    },
						})
					}else{
					    resolve(response.data);
					}
				}else{
					logOut();
					//链接失败
					reject(response.data);
					//弹窗提示
			        Modal.error({
			            title: '网络链接失败',
			            content: response.statusText,
			        });
				}
			}).catch(function (error) {
			    //console.log(error);
			    let content = error.message;
			        if(error.response!=null){ 
			            content = '错误码：'+error.response.status+'-'+error.response.statusText;
			        }
			    message.error(content);
			    setTimeout(()=>logOut(),1000)
			});
		})
	}
}