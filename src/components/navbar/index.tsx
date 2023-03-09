import { useState } from "react";
import Logo from '@/assets/logo.png';
type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = 'flex items-center justify-between';

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>Navbar
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full ga-16`}>
            {/* left side */}
            <img src={Logo} alt='logo' className="logo"/>

{/* right side */}
<div className={`${flexBetween} w-full`}></div>
<div className={`${flexBetween} gap-8 text-sm`}></div>
<p>Home</p>
<p>Vinyl</p>
<p>Merch</p>
<p>Help</p>
          </div>
        </div>
      </div>


    </nav>
  )
}

export default Navbar