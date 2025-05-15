import {RiPlanetLine} from 'react-icons/ri';
import {BiPhone} from 'react-icons/bi';
import {FaPlay} from 'react-icons/fa';
import {MdVolcano} from 'react-icons/md';
import {CiFlag1} from 'react-icons/ci';
import {GiDeer} from 'react-icons/gi';
import {FcSportsMode} from 'react-icons/fc';

// Import images (adjust paths based on your project structure)
// import bgg from './assets/hero/hr_2.jpg';
import bgg from '/assets/hero/hr_2.jpg';

// If using react-router-dom for navigation
import {Link} from 'react-router-dom';

const About = () => {
    const Services = ({icon, title}) => {
        return (
            <div className='flex flex-col gap-4 shadow-xl bg-white rounded-lg p-7 group'>
                <span className='bg-[#f3f8f6] text-indigo-600 w-fit rounded-full p-4 group-hover:text-white group-hover:bg-blue-600'>
                    {icon}
                </span>
                <p className='font-bold'>{title}</p>
                <p className='text-gray-500 text-justify'>
                    Guided tours to Mount Cameroon, propose interesting tourist
                    destinations across Cameroon, secured lodging and African
                    cuisine, transportation, souvenirs, sale of products locally
                    produced in Buea,
                </p>
            </div>
        );
    };

    const Mission = ({icon, title}) => {
        return (
            <div className='flex flex-col gap-4 shadow-xl bg-white rounded-lg p-7 group'>
                <span className='bg-[#f3f8f6] text-indigo-600 w-fit rounded-full p-4 group-hover:text-white group-hover:bg-blue-600'>
                    {icon}
                </span>
                <p className='font-bold'>{title}</p>
                <p className='text-gray-500 text-justify'>
                    Use information and communication technologies to inspire
                    and facilitate memorable and sustainable tourism experiences
                    on Mount Cameroon, fostering a deeper appreciation for its
                    biodiversity, cultural heritage, and adventure offerings.
                </p>
            </div>
        );
    };

    const Shop = ({icon, title}) => {
        return (
            <div className='flex flex-col gap-4 shadow-xl bg-white rounded-lg p-7 group'>
                <span className='bg-[#f3f8f6] text-indigo-600 w-fit rounded-full p-4 group-hover:text-white group-hover:bg-blue-600'>
                    {icon}
                </span>
                <p className='font-bold'>{title}</p>
                <p className='text-gray-500 text-justify'>
                    Available: cozy accommodation, natural honey, honey wine,
                    palm wine, smoked meat of unprotected species, volcanic
                    rocks, solidified magma, sculptures, Mount Cameroon
                    souvenirs (T-shirts, bangles, caps, beats...
                </p>
            </div>
        );
    };

    const Vision = ({icon, title}) => {
        return (
            <div className='flex flex-col gap-4 shadow-xl bg-white rounded-lg p-7 group'>
                <span className='bg-[#f3f8f6] text-indigo-600 w-fit rounded-full p-4 group-hover:text-white group-hover:bg-blue-600'>
                    {icon}
                </span>
                <p className='font-bold'>{title}</p>
                <p className='text-gray-500 text-justify'>
                    Organize secured trips for national and international
                    tourists to Mount Cameroon and other tourist destinations in
                    Cameroon.
                </p>
            </div>
        );
    };

    const Section = ({title, text, children, image}) => {
        return (
            <div className='max-w-[1320px] mx-auto mt-16 px-3'>
                <div className='lg:flex flex-row-reverse gap-8 justify-between'>
                    <div className='lg:w-1/2'>
                        <div>
                            <h6 className='text-indigo-600 bg-[#f3f8f6] w-fit rounded-md px-5 py-2 mb-2 font-bold'>
                                {title}
                            </h6>
                            <h3 className='lg:text-5xl text-3xl font-bold pb-8 leading-tight'>
                                {text}
                            </h3>
                            <p className='text-gray-500'>
                                Monjooo.cm is an Internet based platform
                                operating from Buea in the South West of
                                Cameroon-Central African sub Region. Our mission
                                is to use information and communication
                                technologies to market Mount Cameroon, her flora
                                and fauna as well as other tourist destinations
                                across the world. Our vision is to organize
                                secured trips for national and international
                                tourists to Mount Cameroon and other tourist
                                destinations in Cameroon.
                            </p>
                        </div>
                        {children}
                    </div>
                    <div className='lg:w-1/2'>
                        <div className='lg:flex w-full justify-end'>
                            <img
                                src={image}
                                alt=''
                                className='rounded-t-[300px]'
                                style={{width: '564px', height: '742px'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <section className='relative bg-black lg:h-[380px]'>
                <img
                    src={bgg}
                    alt=''
                    className='absolute h-full w-full object-cover'
                />
                <div className='flex flex-col items-start justify-center relative z-10 lg:h-full h-[380px] max-w-[1320px] mx-auto px-6 lg:pt-0 pt-1'>
                    <span className='lg:text-[52px] text-3xl text-white text-center font-bold relative cursor-pointer'>
                        About Us
                    </span>
                    <p className='text-white text-lg text-center my-4'>
                        Trips changes People
                    </p>
                </div>
            </section>
            <section className='bg-cover bg-no-repeat bg-center'>
                <div className='lg:flex max-w-[1320px] mx-auto relative pt-[120px] px-3'>
                    <div className='flex flex-col gap-6 lg:w-[45%] lg:pr-[80px] lg:pb-[150px] lg:pl-[15px]'>
                        <div className='flex flex-col'>
                            <div className='relative w-fit px-8 py-2 flex items-center justify-center'>
                                <span className='bg-blue-600 rounded-md opacity-15 absolute w-full h-full z-10'></span>
                                <h6 className='text-indigo-600 relative font-semibold'>
                                    Come on
                                </h6>
                            </div>
                            <h3 className='lg:text-5xl text-3xl lg:leading-[1.2] font-bold pb-8 py-4'>
                                Explore monjooo.cm & Enjoy
                            </h3>
                            <p className='text-justify'>
                                <span className='font-bold text-indigo-600 text-3xl'>
                                    monjooo.cm
                                </span>{' '}
                                is an Internet based platform operating from
                                Buea in the South West of Cameroon-Central
                                African sub Region. Our mission is to use
                                information and communication technologies to
                                market Mount Cameroon, her flora and fauna as
                                well as other tourist destinations across the
                                world. Our vision is to organize secured trips
                                for national and international tourists to Mount
                                Cameroon and other tourist destinations in
                                Cameroon.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex gap-4 items-center'>
                                <RiPlanetLine
                                    size={50}
                                    className='text-green-600'
                                />
                                <span className='flex flex-col gap-2'>
                                    <p className='text-lg font-bold'>
                                        Environmental Appreciation and
                                        Conservation.
                                    </p>
                                    <p>
                                        We are Authorized by the Ministry of
                                        Tourism and Leisure.
                                    </p>
                                </span>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-3'>
                                <div className='flex gap-3'>
                                    <BiPhone
                                        size={50}
                                        className='text-orange-600 rounded-full p-1'
                                    />
                                    <span>
                                        <p className='text-sm'>Call Experts</p>
                                        <p>+237 674808077, +237674006542</p>
                                    </span>
                                </div>
                                <button className='bg-blue-600 rounded-lg text-white px-8 h-14 font-bold'>
                                    <Link to='/about'>
                                        <li className='ml-10 uppercase hover:border-b text-md text-white hover:text-green-600'>
                                            Discover More
                                        </li>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[55%] lg:absolute right-0 z-10'>
                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div className='flex flex-col gap-6 pt-12 px-4'>
                                <Mission
                                    icon={
                                        <RiPlanetLine size={80} color='green' />
                                    }
                                    title='Mission'
                                />
                                <Services
                                    icon={
                                        <RiPlanetLine
                                            size={80}
                                            color='yellow'
                                        />
                                    }
                                    title='Services'
                                />
                            </div>
                            <div className='flex flex-col gap-6 px-4'>
                                <Vision
                                    icon={
                                        <RiPlanetLine size={80} color='red' />
                                    }
                                    title='Vision'
                                />
                                <Shop
                                    icon={<RiPlanetLine size={80} />}
                                    title='Shop'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[url('/dr7.jpg')] bg-cover bg-no-repeat bg-center">
                <div className='relative z-20 py-24'>
                    <div className='lg:flex gap-12 max-w-[1320px] px-6 mx-auto mt-32'>
                        <div className='lg:w-1/2'>
                            <span>
                                <button className='animate-pulse border border-white bg-blue-600 rounded-full w-20 h-20 flex justify-center items-center mb-8'>
                                    <FaPlay color='white' />
                                </button>
                                <p className='text-orange-600 text-xl pb-2'>
                                    Are you ready to Tour?
                                </p>
                            </span>
                            <p className='lg:text-5xl text-[30px] lg:leading-[1.12] font-bold text-white py-7'>
                                Ready to travel with real adventure and Enjoy
                                Natural
                            </p>
                            <button className='bg-blue-600 rounded-lg text-white px-8 h-14 mb-4 font-bold'>
                                Check Availability
                            </button>
                        </div>
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                            <div className='border border-gray-600 p-10 flex flex-col gap-4 items-center text-indigo-600 hover:bg-blue-600 hover:text-white transition-bg hover:border-transparent'>
                                <GiDeer className='text-2xl w-20 h-20' />
                                <p>Wildlife Tours</p>
                            </div>
                            <div className='border border-gray-600 p-10 flex flex-col gap-4 items-center text-indigo-600 hover:bg-blue-600 hover:text-white transition-bg hover:border-transparent'>
                                <MdVolcano className='text-2xl w-20 h-20' />
                                <p className='text-white-600'>Volcano Tours</p>
                            </div>
                            <div className='border border-gray-600 p-10 flex flex-col gap-4 items-center text-indigo-600 hover:bg-blue-600 hover:text-white transition-bg hover:border-transparent'>
                                <CiFlag1 className='text-2xl w-20 h-20' />
                                <p>Adventure Tours</p>
                            </div>
                            <div className='border border-gray-600 p-10 flex flex-col gap-4 items-center text-indigo-600 hover:bg-blue-600 hover:text-white transition-bg hover:border-transparent'>
                                <FcSportsMode className='text-2xl w-20 h-20' />
                                <p>Sporting Activities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section></section>
        </div>
    );
};

export default About;
