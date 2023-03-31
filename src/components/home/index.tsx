import useMediaQuery from '@/hooks/useMediaQuery'
import HomePageText from '@/assets/logo-lg.png'
import { SelectedPage } from '@/utils/types'
import { motion } from 'framer-motion'
import HomePageGraphic from '@/assets/temp-image.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
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
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                                <img src={HomePageText} alt='home page text' className='h-96' />
                            </div>
                        </div>
                        <p className='homepage-intro mt-8 text-xl font-dmDisplay text-stone-50 '>
                            World class records. Highest quality merch. Unparalleled customer service.
                        </p>
                        </motion.div>
                    </div>
                </motion.div>
            {/* IMAGE */}
            <div
                className="flex basis-3/5 justify-center"
            >
                {/* <img alt="home-pageGraphic" src={HomePageGraphic} className='home-page-graphic' /> */}
            </div>
        </section>
    )
}

export default Home