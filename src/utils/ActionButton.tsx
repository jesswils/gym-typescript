import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const ActionButton = ({ children, setSelectedPage, isTopOfPage }: Props) => {
  return (
    isTopOfPage
      ? (
        <AnchorLink
          className='rounded-md bg-light-green text-onyx-black px-10 py-2 hover:bg-light-green hover:text-carribean-blue'
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
          title='become a member'
        >
          {children}
        </AnchorLink>
      )
      : (
        <AnchorLink
          className='rounded-md bg-light-green text-onyx-black px-10 py-2 hover:bg-carribean-blue hover:text-accent'
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
          title='become a member'
        >
          {children}
        </AnchorLink>
      )
  );
};

export default ActionButton;
