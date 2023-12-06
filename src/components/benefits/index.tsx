import BenefitsPageGraphic from '@/assets/benefits-graphic.png';
import ActionButton from '@/utils/ActionButton';
import HText from '@/utils/HText';
import { BenefitType, SelectedPage } from '@/utils/types';
import { AcademicCapIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Benefit from './Benefit';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeIcon className='h-6' />,
    title: 'State of the art facilities',
    description:
      `Cardiovascular area, function fitness area, free weights, stretching and mobility area and personal training. `,
  },
  {
    icon: <UserGroupIcon className='h-6' />,
    title: "100's of diverse classes",
    description:
      'We host over 240 fitness classes every week with various early morning and evening sessions available, so you’re sure to find the right class for you.',
  },
  {
    icon: <AcademicCapIcon className='h-6' />,
    title: 'Expert trainers',
    description:
      `All personal trainers are fully-accredited and dedicated to your self-improvement.
      We're here for everyday people, to become strong individuals.`,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id='benefits' className='mx-auto w-5/6 pt-20'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* header */}
        <motion.div
          className='md:my-5 md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>More than just a gym</HText>
          <p className='my-5 text-md text-dark-brown'>
            We're here for everyday people, to become strong individuals. We provide world class fitness equipment,
            trainers and classes to help you find and reach your fitness goals. We put true care into all of our members
            and are here to support you every step of the way.
          </p>
        </motion.div>

        {/* benefits */}
        <motion.div
          className='flex mt-5 items-center gap-8'
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* graphics and description */}
        <div className='mt-16 items-center justify-between md:mt-28 md:flex'>
          {/* graphic */}
          <img
            src={BenefitsPageGraphic}
            alt='benefits-page-graphic'
            className='mx-auto'
          />

          {/* description */}
          <div>
            {/* title */}
            <div className='relative'>
              <div>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Millions of happy members getting{' '}
                    <span className='text-carribean-blue font-golos drop-shadow-sm saturate-100 '>
                      fit
                    </span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* description */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className='my-5 text-dark-brown leading-normal mb-1'>
              We welcome all bodies to our gym.
              <br></br>
              We create an inclusive and welcoming space for people to exercise without judgement.
              <br></br>
              <br></br>
              We believe that the benefits of exercise should be made accessible, affordable and adaptive for everyone. Regardless of their gender, ethnicity, identity, ability or body shape.
              Inclusive and social, with plenty of time to chat in between activities, based around a circuit which means you get a full-body workout tailored to your individual needs.
              <br></br>
    Being member-run means we can provide social health and fitness activities in an environment where we can feel comfortable and supported.
              </p>
              <p className='mb-5 text-dark-brown'>
              We offer a range of strength and weightlifting classes classes, and also put on events and affordable community classes.
              Our space has been designed by and for our members, making it a unique space to come and train.
              </p>
            </motion.div>
            {/* button */}
            <div className='relative mt-10'>
              <div className='before:content-leaves before:absolute before:-bottom-20 before:right-40 before:z-[-1]'>
                <ActionButton setSelectedPage={setSelectedPage} isTopOfPage >
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
