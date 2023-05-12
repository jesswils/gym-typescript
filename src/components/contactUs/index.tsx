import HText from '@/utils/HText';
import { SelectedPage } from '@/utils/types';
import { triggerAsyncId } from 'async_hooks';
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {

    const {
        register, 
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
            if (!isValid) {
            e.preventDefault()
        }
    }

    const inputStyles = `w-full rounded-lg bg-logo-cream px-5 py-3 placeholder-white`;

  return (
   <section id='contactUs' className='mx-auto w-5/6 pt-24 pb-32'>
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* header */}
        <motion.div
        className='md:w-3/5'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        >
            <HText>
                <span className='text-carribean-blue saturate-100 font-golos drop-shadow-sm'>Join now</span> to achieve your fitness goals.
            </HText>
            <p className='my-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </motion.div>
        {/* form and image */}
        <div className='mt-10 justify-between gap-8 md:flex'>
            <motion.div
            className='mt-1 basis-3/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            >
                <form
                target='_blank'
                onSubmit={onSubmit}
                action='https://formsubmit.co/borome'
                method='POST'
                >
                    <input 
                    className={inputStyles}
                    type='text'
                    placeholder='Name'
                    {...register('name', {
                        required: true,
                        maxLength: 100,
                    })}
                    />
                    {errors.name ? 
                    <p className='mt-1 text-white'>
                        {errors.name.type === 'required' ? 'This field is required'
                         : errors.name.type === 'maxLength' ? 'The maximum length is 100 characters' 
                         : '' }
                         </p> : ''}
                </form>
            </motion.div>
        </div>
    </motion.div>
   </section>
  )
}

export default ContactUs;