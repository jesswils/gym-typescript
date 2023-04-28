import HText from '@/utils/HText';
import { SelectedPage } from '@/utils/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
}

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (<>
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
     className='mt-5 rounded-md border-2 border-gray-100 px-4 py-5 text-center'
     variants={childVariant}
     >
        <div className='mb-2 flex justify-center'>
          <AnchorLink>
            <div className='rounded border-2 border-grey-100 bg-primary-100 p-4'>
                {icon}
            </div>
            </AnchorLink>
        </div>
        <h4 className='pt-0.5 font-medium'>{title}</h4>
        <p className='my-3'>{description}</p>
        <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
            </motion.div>
    </>
  )
}

export default Benefit