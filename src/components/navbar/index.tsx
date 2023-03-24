import { useState } from "react";
import Logo from '@/assets/logo.png';
import Link from "./Link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from "@/utils/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
}

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navBackground = isTopOfPage ? '' : 'bg-white drop-shadow';

  return (
    <div className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full ga-16`}>
              {/* left side */}
              {/* <img src={Logo} alt='logo' className="logo" /> */}
              {/* right side */}
              {isAboveMediumScreen ? (
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link page='Home'
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link page='Vinyl'
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link page='Merch'
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link page='Help'
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                </div>
              ) : (
                <button
                  className="rounded-full green p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className='h-6 w-6 text-white' />
                </button>
              )}
            </div>
          </div>
        </div>
        {/* mobile nav menu */}
        {!isAboveMediumScreen && isMenuToggled && (
          <div className={`fixed right-0 bottom-0 z-40 h-full w-[300px] ${navBackground} drop-shadow-xl`} >
            {/* close modal */}
            <div className="flex justify-end p-12">
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-grey" />
              </button>
            </div>
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
              <Link page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link page='Vinyl'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link page='Merch'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link page='Help'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar