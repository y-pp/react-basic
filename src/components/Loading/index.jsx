import React from 'react';
import classNames from 'classnames';
import 'spinkit/spinkit.min.css';
import './index.scss';

const Loading = (props) => {
  const { visible = false } = props;
  return (
    <div
      className={classNames('loading', {
        show: visible === true,
        hide: visible === false,
      })}
    >
      <div className='bg' />
      <div className='logo'>
        <div className='sk-wave' style={{ margin: '0 auto', width: '70px' }}>
          <div className='sk-wave-rect'></div>
          <div className='sk-wave-rect'></div>
          <div className='sk-wave-rect'></div>
          <div className='sk-wave-rect'></div>
          <div className='sk-wave-rect'></div>
        </div>
        <div className='text'>加载中...</div>
      </div>
    </div>
  );
};

export default Loading;