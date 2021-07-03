/*
 * @Description: 
 * @Date: 2021-07-03 12:46:08
 * @Author: 楊皮皮
 */
const types = {
    LOADING_CHANGE: 'loading_change'
}

const defaultState = {
    loading: false,
}

const actions = {
    showLoading() {
        return {
            type: types.LOADING_CHANGE,
            value: true
        }
    },
    hideLoading() {
        return {
            type: types.LOADING_CHANGE,
            value: false
        }
    }
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