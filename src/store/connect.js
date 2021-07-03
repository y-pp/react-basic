/*
 * @Description: 
 * @Date: 2021-07-03 12:46:45
 * @Author: 楊皮皮
 */
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

const newConnect = (mapStateToProps) => {
    return (Component) => {
        return connect(mapStateToProps, mapDispatchToProps)(Component);
    }
}

export default newConnect;