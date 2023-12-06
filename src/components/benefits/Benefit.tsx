import HText from '@/utils/HText';
import { SelectedPage } from '@/utils/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        className='mt-5 rounded-lg border-2 border-double px-4 py-5 text-center border-neutral'
        variants={childVariant}
      >
        <div className='mb-2 flex justify-center text-carribean-blue'>
          <div className='rounded border p-4 border-neutral'>
            {icon}
          </div>
        </div>
        <h4 className='pt-0.5 font-medium text-dark-brown'>{title}</h4>
        <p className='my-3 text-dark-brown'>{description}</p>
        <AnchorLink
          className='text-sm font-bold underline text-dark-brown'
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p>Learn More</p>
        </AnchorLink>
      </motion.div>
    </>
  );
};

export default Benefit;
