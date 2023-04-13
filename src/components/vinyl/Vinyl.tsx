import { SelectedPage } from '@/utils/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    artist: string;
    image: JSX.Element,
    title: string;
    description: string;
    price: string,
    setSelectedPage: (value: SelectedPage) => void;
}

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

const Vinyl = ({artist, title, image, description, price, setSelectedPage}: Props) => {
  return (<>
    <motion.div
     className='mt-5 rounded-md border-2 border-gray-100 px-4 py-5 text-center'
     variants={childVariant}>
        <div className='mb-2 flex justify-center'>
          <AnchorLink>
            <div className='rounded border-2 border-grey-100 bg-primary-100 img'>
                {image}
            </div>
            </AnchorLink>
        </div>
        <h3 className='pt-0.5 font-medium'>{artist}</h3>
        <h4 className='font-bold'>{title}</h4>
        <p className='my-3'>{description}</p>
    </motion.div>
    </>
  )
}

export default Vinyl