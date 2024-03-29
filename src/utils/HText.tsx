import React from 'react';

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className='basis-3/5 font-dmText text-4xl font-extrabold text-deep-brown'>
      {children}
    </h1>
  );
};

export default HText;
