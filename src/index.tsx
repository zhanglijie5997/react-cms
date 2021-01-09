import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { createBrowserHistory } from 'history';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { AppContainer } from 'react-hot-loader';
const store = configureStore(createBrowserHistory());

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <HashRouter>
                <App />
            </HashRouter>
        </AppContainer>
    </Provider>,
    document.getElementById('root')
);

console.log(module);
// if (module.hot) {
//     module.hot.accept('./App', () => {
//       //因为在App里使用的是export default语法，这里使用的是require,默认不会加载default的，所以需要手动加上
//       const NextApp = require('./App').default;
//       // 重新渲染到 document 里面
//       render(NextApp);
//     })
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
