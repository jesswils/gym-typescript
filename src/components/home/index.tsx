import HomePageText from '@/assets/home-page-text.png';
import HomePageGraphic from '@/assets/homepage-img.png';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/utils/ActionButton';
import { SelectedPage } from '@/utils/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id='home' className='gap-16 bg-brown-grey py-10 md:h-full md:pb-0'>
      {/* image and main header */}
      <motion.div
        className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* main header  */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* headings */}
          <motion.div
            className='md:-mt-20'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className='homepage-intro mt-8 text-4xl font-golos font-extrabold text-accent-white tracking-normal leading-normal'>
              A studio that offers you more.
              <br></br>Building confidence.<br></br> Celebrating health.
              <br></br>Changing bodies. <br></br>Changing lives.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className='mt-8 flex items-center gap-8'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage} isTopOfPage>
              Join Now
            </ActionButton>
            <AnchorLink
              className='text-sm font-bold underline'
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* image */}
        <div className='flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end'>
          <img alt='home-pageGraphic' src={HomePageGraphic} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
