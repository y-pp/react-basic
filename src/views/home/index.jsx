import React,{Component} from 'react';
import { Loading } from '../../components';
import { connect } from '../../store';
import {actions as userActions} from '../../store/models/user';
import './index.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userActions.login());
  }

  render() {
    const { loading } = this.props;
    return (
      <div className='home'>
        home
        <Loading visible={loading} />
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.global.loading,
}))(Home);
