import Logo from '@/assets/logo.png';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/utils/ActionButton';
import { SelectedPage } from '@/utils/types';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Link from './Link';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navBackground = isTopOfPage ? '' : 'bg-carribean-blue drop-shadow';

  return (
    <nav>
      <div
        className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full`}
      >
        {/* <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}> */}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt='logo' className='logo' />

            {/* right side */}
            {isAboveMediumScreens
              ? (
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link
                      page='Home'
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page='Benefits'
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page='Classes'
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page='Contact Us'
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                  <div className={`${flexBetween} gap-8`}>
                    <p>Sign In</p>
                    <ActionButton setSelectedPage={setSelectedPage} isTopOfPage>
                      Become a Member
                    </ActionButton>
                  </div>
                </div>
              )
              : (
                <button
                  className='rounded-full bg-tiffany-blue p-2'
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  title='minimized menu icon'
                >
                  <Bars3Icon className='h-6 w-6 text-accent-white' />
                </button>
              )}
          </div>
        </div>
      </div>

      {/* mobile nav menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div
          className={`fixed right-0 bottom-0 z-40 h-full w-[300px] bg-tiffany-blue drop-shadow-xl`}
        >
          {/* close modal */}
          <div className='flex justify-end p-12'>
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              title='close the minimised menu'
            >
              <XMarkIcon className='h-6 w-6 text-grey/400' />
            </button>
          </div>

          {/* menu */}
          <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
            <Link
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Benefits'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Classes'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Contact Us'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
