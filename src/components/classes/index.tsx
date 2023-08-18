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
      description: `Most people think of running when they want to cardio, but we have a range of exercises and machines to get your heart pumping!
       Cardio and strength training have a lot of crossover, so if you’re looking for ways to elevate your workout, consider turning it into a full-body routine.`,
      image: image1
    },
    {
      name: 'Weight Training',
      description: `We have all the exercises you need for a total body workout. Each class includes 8 strength exercises with perfect form and control to hit the whole body.`,
      image: image2
    },
    {
      name: 'Strength and Conditioning',
      description: `Want to feel stronger? Our Strength & Conditioning classes will help sculpt, tone, condition and strengthen your muscles.`,
      image: image3
    },
    {
      name: 'Flexiblity',
      description: `A total body workout that combines the 7 key functional movements of squat, lunge, push, pull, hinge, twist and walk/run.
      Using a mixture of bodyweight and weighted exercises, this is a low-impact class improving your overall strength, balance and mobility.`,
      image: image4
    },
    {
      name: 'Mind and Body',
      description: `Work on your flexibility, core strength & mental wellbeing. Our Mind & Body classes will leave you feeling strong, calm & centred.`,
      image: image5
    },
  ]

  type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const Classes = ({ setSelectedPage }: Props) => {
  return (
    <section id='classes' className='w-full bg-logo-cream py-24'>
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
            <div className='mt-10 w-full overflow-x-auto overflow-y-hidden'>
              <ul className='w-[2000px] whitespace-nowrap'>
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