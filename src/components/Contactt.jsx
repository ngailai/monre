import {useRef, useState} from 'react';
import {motion, useInView} from 'framer-motion';
import emailjs from '@emailjs/browser';
import HashLoader from 'react-spinners/HashLoader.js';

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const isInView = useInView(ref, {margin: '-100px'});
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm('service_80d93w9', 'template_ye382fv', formRef.current, {
                publicKey: 'caWbLgvdc0Cxb-smc',
            })
            .then(
                (result) => {
                    console.log(result);
                    setSuccess(true);
                    setLoading(false);
                },
                (error) => {
                    console.log(error);
                    setError(true);
                    setLoading(false);
                },
            );
    };

    return (
        <motion.div
            ref={ref}
            className='p-6 bg-black-100  flex flex-col lg:flex-row min-h-screen  relative'
            variants={variants}
            initial='initial'
            whileInView='animate'
        >
            <motion.div
                className='flex flex-1 flex-col items-start justify-center  p-6 lg:p-12'
                variants={variants}
            >
                <motion.h1 className='mb-8  bg-slate-100 text-4xl rounded-md  font-bold  text-blue-80 md:text-5xl'>
                    Prenons Contact
                </motion.h1>
                <motion.div className='mb-6' variants={variants}>
                    <h2 className='text-2xl font-semibold  rounded-md text-blue-800'>
                        Mail
                    </h2>
                    <span className='text-lg text-gray-600'>
                        monjooocm@gmail.com
                    </span>
                </motion.div>
                <motion.div className='mb-6' variants={variants}>
                    <h2 className='rounded-md text-2xl font-semibold  text-blue-800 '>
                        Addresse
                    </h2>
                    <span className='text-lg text-gray-600'>
                        Buea, Cameroon
                    </span>
                </motion.div>
                <motion.div className='mb-6' variants={variants}>
                    <h2 className='rounded-md text-2xl font-semibold  text-blue-800'>
                        Telephone
                    </h2>
                    <span className='text-lg text-gray-600'>
                        +237 674808077,+237674006542
                    </span>
                </motion.div>
            </motion.div>
            <div className='relative flex flex-1 items-center justify-center  p-6 lg:p-12'>
                <motion.div
                    className='absolute'
                    initial={{opacity: 1}}
                    whileInView={{opacity: 0}}
                    transition={{delay: 0, duration: 1}}
                >
                    <svg
                        width='300px'
                        height='300px'
                        viewBox='0 0 32.666 32.666'
                        className='text-gray-400'
                    >
                        <motion.path
                            fill='none'
                            stroke='currentColor'
                            strokeWidth={0.2}
                            initial={{pathLength: 0}}
                            animate={isInView && {pathLength: 1}}
                            transition={{duration: 3.5}}
                            d='M130,76.191v-20.99c19.167,0.097,38.304,7.433,52.896,22.024C197.314,91.644,204.734,110.062,205,129h-21 c-0.264-13.559-5.629-26.601-15.953-36.925C157.549,81.576,143.79,76.287,130,76.191z M205.629,54.492 C226.315,75.178,236.733,101.829,237,129h21c-0.268-32.549-12.742-64.577-37.521-89.357C196.299,15.463,164.18,2.11,130,2.011v21 C158.57,23.11,185.416,34.279,205.629,54.492z M9.58,60.699C1.671,70.6-15.912,117.784,59.462,195.045 c79.399,81.388,130.632,63.978,139.452,54.794l-53.099-53.099c-7.41,7.41-16.968,0.832-35.308-14.121 c-12.135-9.894-26.096-23.203-38.202-38.202c-8.494-10.525-16.006-21.577-8.246-29.337L9.58,60.699z M218.109,230.831 c3.432-3.432,3.098-8.69-0.036-11.824v-0.049c0,0-41.409-41.361-41.435-41.386c-3.283-3.283-8.532-3.211-11.765,0.023 l-15.042,15.042l53.236,53.236c0,0,15.028-14.982,15.028-15.007L218.109,230.831z M83.209,95.93 c3.432-3.432,3.098-8.69-0.036-11.824v-0.049c0,0-42.603-42.555-42.628-42.58c-3.283-3.283-8.532-3.211-11.765,0.023L13.737,56.542 l54.43,54.43c0,0,15.028-14.981,15.028-15.006L83.209,95.93z'
                        />
                    </svg>
                </motion.div>
                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className='flex w-full max-w-md flex-col gap-4 rounded-lg bg-white p-8 shadow-lg'
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 1, duration: 1}}
                >
                    <input
                        type='text'
                        required
                        placeholder='Nom'
                        name='name'
                        className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <input
                        type='email'
                        required
                        placeholder='mail'
                        name='email'
                        className='p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <textarea
                        rows={6}
                        placeholder='Message'
                        name='message'
                        className='p-3 text-lg border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <button
                        className='flex items-center justify-center p-3 text-lg font-semibold text-white rounded-md bg-blue-600 hover:bg-blue-700'
                        onClick={() => setLoading(!loading)}
                    >
                        {loading ? (
                            <HashLoader size={25} color='#fff' />
                        ) : (
                            'Submit'
                        )}
                    </button>
                    {error && (
                        <span className='text-sm text-red-500'>
                            Oups, un souci ! Réessayez !
                        </span>
                    )}
                    {success && (
                        <span className='text-sm text-green-500'>
                            Message bien envoyé !
                        </span>
                    )}
                </motion.form>
            </div>
        </motion.div>
    );
};

export default Contact;
