import React from 'react';
import './container.scss';

interface IContainerProps {
  children?: React.ReactNode;
}

export function Container({children}: IContainerProps) {

  return (
    <div className='container'>
      {children}
    </div>
  );
}
