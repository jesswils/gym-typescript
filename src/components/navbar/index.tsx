import { useState } from "react";
import Logo from '@/assets/logo.png';
import Link from "./Link";
import { Bars3Icon } from '@heroicons/react/24/solid'
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full ga-16`}>
            {/* left side */}
            <img src={Logo} alt='logo' className="logo" />

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
                  <Link page='Home'
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
    </nav>
  )
}

export default Navbar