import contactUsPageGraphic from '@/assets/contact-us-graphic.jpg';
import HText from '@/utils/HText';
import { SelectedPage } from '@/utils/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const inputStyles = `mb-4 w-3/4 rounded-lg bg-light-green opacity-90 px-5 py-3 text-onyx-black focus:outline-none`;

  return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
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
            <span className='text-carribean-blue saturate-100 font-golos drop-shadow-sm'>
              Join now
            </span>{' '}
            to achieve your fitness goals.
          </HText>
          <p className='my-5'>
            If you would like to discuss anything from booking a class, finding out membership prices or scheduling a
            free trial, simply complete all details on the form below and a member of the team will be in touch with you
            as soon as possible.
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
              {/* name input */}
              <input
                className={inputStyles}
                type='text'
                placeholder='Name'
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name
                ? (
                  <p className='mb-3 mr-8 pl-1'>
                    {errors.name.type === 'required'
                      ? 'This field is required'
                      : errors.name.type === 'maxLength'
                      ? 'The maximum length is 100 characters'
                      : ''}
                  </p>
                )
                : ''}
              {/* email input */}
              <input
                className={inputStyles}
                type='text'
                placeholder='Email'
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email
                ? (
                  <p className='mb-3 mr-8 pl-1'>
                    {errors.email.type === 'required'
                      ? 'This field is required'
                      : errors.email.type === 'pattern'
                      ? 'Invalid email address'
                      : ''}
                  </p>
                )
                : ''}

              {/* message input */}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder='Message'
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message
                ? (
                  <p className='mb-3 mr-8 pl-1'>
                    {errors.message.type === 'required'
                      ? 'This field is required'
                      : errors.message.type === 'maxLength'
                      ? 'The maximum length is 2000 characters'
                      : ''}
                  </p>
                )
                : ''}

              <button
                type='submit'
                className='mt-1 rounded-lg bg-light-green px-20 py-3 transition duration-500 hover:text-powder-white
                           hover:bg-carribean-blue'
              title='submit the form to become a member'
              >
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div
            className='relative mt-16 basis-2/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className='md:before:content-gymtext w-full before:absolute before:-bottom-20 before:right-10 before:z-[-1] opacity-75'>
              <img
                className='w-full rounded-lg'
                alt='contact-us-page-graphic'
                src={contactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
