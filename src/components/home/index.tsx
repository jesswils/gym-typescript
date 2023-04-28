import useMediaQuery from '@/hooks/useMediaQuery'
import HomePageText from '@/assets/logo-tagline.png'
import { SelectedPage } from '@/utils/types'
import { motion } from 'framer-motion'
import HomePageGraphic from '@/assets/homepage-img.jpg'
import ActionButton from '@/utils/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  
    return (
        <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
            {/* image and main header */}
        <motion.div
            className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
                {/* main header  */}
                <div className='z-10 md:basis-3/5'>
                    {/* headings */}
                    <motion.div
                    className='md:-mt-20'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    >
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-gymtext'>
                                <img src={HomePageText} alt='home page text' />
                            </div>
                        </div>

                        <p className='homepage-intro mt-8 text-4xl font-golos font-extrabold text-accent-white tracking-normal leading-normal'>
                        A studio that offers you more.
                        <br></br>Building confidence. Celebrating health.
                        Changing bodies, changing lives.
                        </p> 
                </motion.div>

                {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
          </div>
          {/* image */}
          <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
          </motion.div>
        </section>
    )
}

export default Home