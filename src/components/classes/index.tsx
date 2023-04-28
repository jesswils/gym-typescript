import HText from '@/utils/HText';
import { SelectedPage } from "@/utils/types";
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const Classes = ({ setSelectedPage }: Props) => {
  return (
    <section id='classes' className='w-full bg-logo-cream py-40' >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Classes)}
        >
            <motion.div
            className='mx-auto w-5/6'
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
                <div>
                    <HText>Our Classes</HText>
                    <p>If it’s about sweat we have Cardio, if it’s about being stronger we have Strength & Conditioning or if it’s about flexibility we have Mind & Body. Whatever you are into we have 100's of classes to help you work towards your fitness goals.
They are all completely free, with a packed timetable that is open and available to all, from beginner right through to advanced.</p>
                </div>

            </motion.div>
            
        </motion.div>
    </section>
  )
}

export default Classes