import { SelectedPage, VinylType } from '@/utils/types'
import { motion } from 'framer-motion'
import HText from '@/utils/HText'
import Vinyl from './Vinyl'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const vinyls: Array<VinylType> = [
  {
    image: <img src='https://media.pitchfork.com/photos/5929c458ea9e61561daa811a/1:1/w_600/0bc6101d.jpg' />,
    artist: 'MF Doom',
    title: 'Madvillan',
    description: 'Madvillany - Vinyl Double LP',
    price: '£28.49',
  },
  {
    image: <img src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/716ZuJ-sejL._AC_SL1200_.jpg' />,
    artist: 'MF Doom',
    title: 'Operation: Doomsday',
    description: 'Original cover edition - Vinyl Double LP',
    price: '£32.99',
  },
  {
    image: <img src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71H363udhGL._AC_SL1500_.jpg' />,
    artist: 'MF Doom',
    title: 'Mm Food',
    description: 'Madvillany - Vinyl Double LP',
    price: '£35',
  }
]

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

const Vinyls = ({setSelectedPage}: Props) => {
  return (
    <section id='vinyl' className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            <div>
                <HText>Not your typical record store</HText>
                <p>We provide the most eclectic mix of records from around the world</p>
            </div>
            <motion.div
             className='mt-5 items-center justify-between gap-8 md:flex'
             initial='hidden'
             whileInView='visible'
             viewport={{once: true, amount: 0.5}}
             variants={container}
             >
              {vinyls.map((vinyl: VinylType) => (
                <Vinyl 
                key={vinyl.title}
                image={vinyl.image}
                artist={vinyl.artist}
                title={vinyl.title}
                description={vinyl.description}
                price={vinyl.price}
                setSelectedPage={setSelectedPage}
                />
              ))}
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Vinyls