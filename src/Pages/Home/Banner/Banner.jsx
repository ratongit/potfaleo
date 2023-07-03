import './Banner.css'
import { FaFacebook, FaGit, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import React from 'react';
import Typed from 'typed.js';
// import { FaBeer } from 'react-icons/fa';
// import { FaBeer } from 'react-icons/fa';


const Banner = () => {
    const i = 6 || 7 || 8 || 9 || 5

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Frontent Web Developer.', 'MARN Web Developer', 'React Web Developer', 'Backent Web Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            startDelay: 100,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className='banner grid  md:grid-cols-2 justify-center grid-row-reverse'>
            <div className='justify-center flex md:p-[65px] p-10 text-xl'>
                <div>
                    <h1 className='banner-text  '> Hello 
                    <br />
                    It's Me
                     </h1>
                    <h1 className='banner-text-animation text-blue-500 font-semibold text-5xl my-4'>Raton Kumar</h1>
                    <h3 className='banner-text'>
                       I'm a  <span className='text-blue-400' ref={el} />
                    </h3>

<br />
                    <p className='banner-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi pariatur et dolore, modi necessitatibus ratione harum fugit facilis? Laboriosam vero, atque eveniet minima voluptatibus harum optio culpa sunt cum quia.
                    </p>
                    <br />
                    <div className='social-media '>
                        <ul className='flex gap-5 banner-text-animation '>


                            <li style={{ '--i': 5 }}  ><span className="hover:text-white  "> <FaFacebook /> </span></li>
                            <li style={{ '--i': 6 }}  ><span className="hover:text-white  "><FaLinkedin /></span></li>
                            <li style={{ '--i': 7 }}  ><span className="hover:text-white  "><FaGit /></span></li>
                            <li style={{ '--i': 8 }}  ><span className="hover:text-white  "><FaWhatsapp /> </span></li>



                        </ul>
                    </div>
                    <br />
                    <div className='btn btn-secondary banner-text-animation'>Download Resume</div>
                </div>
            </div>
            <section className='flex justify-center align-middle md:mt-20'>
                <div>
                    <img className='img rounded-3xl' src="../../../../public/my-photo.png" alt="" />
                </div>
            </section>

        </div>

    );
};

export default Banner;