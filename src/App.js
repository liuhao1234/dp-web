import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';


class App extends Component {
  render() {
    return (
    	<LocaleProvider locale={zh_CN}>
    		<div className="App">
      			{this.props.children}
      		</div>
    	</LocaleProvider>
    );
  }
}

export default App;
