import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="#316fea"
      ariaLabel="three-circles-loading"
      wrapperStyle={{
        display: 'flex',
        position: 'fixed',
        zIndex: '9999',
        top: '0',
        left: '0',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      }}
    />
  );
};
export default Loader;
