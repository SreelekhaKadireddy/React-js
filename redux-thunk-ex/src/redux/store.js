import {createStore,applyMiddleware} from 'redux';
import { userReducer } from './User/user.reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
let store=createStore(userReducer,composeWithDevTools(applyMiddleware(thunk,logger)))
export {store}