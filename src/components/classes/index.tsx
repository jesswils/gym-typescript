import HText from '@/utils/HText';
import { SelectedPage, ClassType } from "@/utils/types";
import { motion } from 'framer-motion';
import Class from './Class';
import image1 from '@/assets/image1.jpg'
import image2 from '@/assets/image2.jpg'
import image3 from '@/assets/image3.jpg'
import image4 from '@/assets/image4.jpg'
import image5 from '@/assets/image5.jpg'

  const classes: Array<ClassType> = [
    {
      name: 'Cardio',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: image1
    },
    {
      name: 'Weight Training',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: image2
    },
    {
      name: 'Strength and Conditioning',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: image3
    },
    {
      name: 'Flexiblity',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: image4
    },
    {
      name: 'Mind and Body',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: image5
    },
  ]

  type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const Classes = ({ setSelectedPage }: Props) => {
  return (
    <section id='classes' className='w-full bg-logo-cream py-40'>
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
                <div className='md:w-3/5'>
                    <HText>Our Classes</HText>
                    <p className='py-5'>If it’s about sweat we have Cardio, if it’s about being stronger we have Strength & Conditioning or if it’s about flexibility we have Mind & Body.
                     Whatever you are into we have 100's of classes to help you work towards your fitness goals.
                    They are all completely free, with a packed timetable that is open and available to all, from beginner right through to advanced.</p>
                </div>
            </motion.div>
            <div className='mt-10 overflow-x-auto overflow-y-hidden'>
              <ul className='w-[2800px] whitespace-nowrap'>
                {classes.map((item: ClassType, index) => (
                  <Class 
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  />
                ))}
              </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default Classes