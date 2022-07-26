import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { isInIcestark, setLibraryName } from '@ice/stark-app';
setLibraryName('micro-son1-app');

export const mount = (props) => {
    console.log(props);
    ReactDOM.render(<App {...props} />, props.container);
}

export const unmount = (props) => {
  ReactDOM.unmountComponentAtNode(props.container);
}

export const bootstrap = () => {

};
  
  // 注意：`setLibraryName` 的入参需要与 webpack 工程配置的 output.library 保持一致
  
  if (!isInIcestark()) {
    ReactDOM.render(<App />, document.getElementById('son1-root'));
  }
  