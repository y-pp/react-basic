/*
 * @Description: 
 * @Date: 2021-07-01 09:41:23
 * @Author: 楊皮皮
 */
import React, { lazy,Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Loading } from './components';
import { HashRouter as Router, Route } from 'react-router-dom';
import { constantRoutes } from './router';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Home = lazy(() => import('./views/home'))

const RouteContent = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading visible={true} />}>
        <Router>
          <Route path="/" component={Home} />
          {constantRoutes && constantRoutes.map((item) => {
            return <Route key={item.path} path={item.path} />
          })}
        </Router>
      </Suspense>
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouteContent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
