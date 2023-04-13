import { useEffect, useState } from 'react';
import Navbar from "@/components/navbar";
import { SelectedPage } from "@/utils/types";
import Vinyls from '@/components/vinyl';
import Home from '@/components/home';

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setisTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setisTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setisTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  return (
    <div className='app'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
        <Home setSelectedPage={setSelectedPage} />
        {/* <Vinyls setSelectedPage={setSelectedPage} /> */}
    </div>
  );
};

export default App;
