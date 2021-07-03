/*
 * @Description: 
 * @Date: 2021-07-03 12:46:23
 * @Author: 楊皮皮
 */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const modelsFiles = require.context('./models', true, /\.js$/);
const reducersObj = modelsFiles.keys().reduce((reducersObj, modelPath) => {
    const modelName = modelPath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modelsFiles(modelPath);
    const { reducers } = value;
    reducersObj[modelName] = reducers
    return reducersObj
}, {});

const reducers = combineReducers(reducersObj);
const middlewares = [thunk];
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancers = composeEnhancers(
    applyMiddleware(...middlewares),
);
const store = createStore(reducers, enhancers);

export { default as connect } from './connect';
export default store