/*
 * @Description: 
 * @Date: 2021-07-03 15:24:19
 * @Author: 楊皮皮
 */
import { userLogin } from '../../api/user';
import { actions as globalActions } from './global';

const types = {
    LOADING_CHANGE: 'loading_change'
}

const defaultState = {
    nickname: '',
    avatar: '',
    roles: []
}

const actions = {
    login() {
        return (dispatch) => {
            dispatch(globalActions.showLoading());
            userLogin().then(res => {
                console.log('res:', res)
                dispatch(globalActions.hideLoading());
            });
        }
    },
}

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case types.LOADING_CHANGE:
            return {
                ...state,
                loading: action.value
            }
        default:
            return state
    }
}

export {
    actions,
    reducers,
}