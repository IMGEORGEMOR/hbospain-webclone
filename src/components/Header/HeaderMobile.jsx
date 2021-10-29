import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import hbologo from "../../assets/hbologo.svg"


import "./header.css"

const Header = () => {

    //sticky navbar feature for mobile
    const [isSticky, setSticky] = useState(false);

    const ref = useRef(null);

    const handleScroll = () => {

        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= -0.0001);
        }

        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0);
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };

    }, [])

    return (
        <header className="header-mobile">

            <div className="header-logo">
                <button>
                    <svg className="header-icon" color="white" width="34" height="34" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" data-automation="my-account-gear-icon"><g id="Symbols" fill="currentColor" ><g id="Icon-/-Adult-/-Misc-/-Settings-/-Default"><g id="icon_settings"><g id="gear-path"  transform="translate(9 9)"><path d="M1.653 16.242h.873c.187.624.468 1.247.748 1.84l-.623.623c-.655.655-.655 1.715 0 2.4l2.213 2.214c.655.655 1.715.655 2.4 0l.624-.624a10.35 10.35 0 0 0 1.84.749v.873c0 .935.747 1.683 1.683 1.683h3.148c.935 0 1.684-.748 1.684-1.683v-.873c.623-.187 1.247-.468 1.839-.749l.623.624c.655.655 1.715.655 2.4 0l2.214-2.213c.655-.655.655-1.715 0-2.401l-.623-.623c.311-.593.56-1.216.748-1.84h.873c.935 0 1.683-.748 1.683-1.683V11.44c0-.935-.748-1.683-1.683-1.683h-.873c-.187-.624-.468-1.247-.748-1.84l.623-.623c.655-.655.655-1.715 0-2.4L21.106 2.68c-.655-.655-1.715-.655-2.4 0l-.624.624a10.35 10.35 0 0 0-1.84-.749v-.873C16.243.748 15.495 0 14.56 0h-3.148c-.936 0-1.684.748-1.684 1.683v.873c-.623.187-1.247.468-1.84.749l-.623-.624c-.654-.655-1.714-.655-2.4 0L2.682 4.894c-.655.655-.655 1.715 0 2.401l.623.623a10.352 10.352 0 0 0-.748 1.84h-.873c-.935 0-1.683.748-1.683 1.683v3.118c-.031.935.748 1.683 1.652 1.683zm-.748-4.8c0-.406.343-.749.748-.749h1.59l.094-.343c.218-.78.53-1.559.935-2.276l.187-.311L3.337 6.64a.773.773 0 0 1 0-1.06L5.55 3.367c.28-.28.78-.28 1.06 0l1.122 1.122.312-.187a10.295 10.295 0 0 1 2.275-.935l.343-.094v-1.59c0-.405.343-.748.749-.748h3.148c.405 0 .748.343.748.748v1.59l.343.094c.78.218 1.559.53 2.276.935l.312.187 1.122-1.122c.28-.28.78-.28 1.06 0l2.213 2.213a.73.73 0 0 1 .218.53c0 .187-.093.374-.218.53l-1.122 1.123.187.311c.405.717.717 1.497.935 2.276l.094.343h1.59c.405 0 .748.343.748.748v3.118a.759.759 0 0 1-.748.748h-1.59l-.063.343c-.218.78-.53 1.559-.935 2.276l-.187.311 1.122 1.123a.73.73 0 0 1 .219.53c0 .187-.094.374-.219.53l-2.244 2.244c-.28.28-.78.28-1.06 0l-1.122-1.122-.312.187c-.717.405-1.496.717-2.276.935l-.343.094v1.59a.759.759 0 0 1-.748.748h-3.148a.759.759 0 0 1-.749-.748v-1.59l-.343-.094c-.779-.218-1.558-.53-2.275-.935l-.312-.187-1.122 1.122c-.28.28-.78.28-1.06 0L3.337 20.42a.773.773 0 0 1 0-1.06l1.122-1.123-.187-.311a10.295 10.295 0 0 1-.935-2.276l-.094-.343h-1.59a.759.759 0 0 1-.748-.748V11.44z" id="Shape"></path><path d="M13 17c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-7c1.646 0 3 1.354 3 3s-1.354 3-3 3-3-1.354-3-3 1.335-3 3-3z" id="Shape"></path></g></g></g></g></svg>
                </button>
                <a href="#!">
                    <img src={hbologo} alt="hbo-logo" className="hbo-logo" />
                </a>
                <button>
                    <svg className="header-icon" color="white" width="34" height="34" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
                        <g id="Symbols" stroke="currentColor">
                            <circle cx="20" cy="20" r="9" fill="none"></circle>
                            <path d="M33.5 33.5L27 27"></path>
                        </g>
                    </svg>
                </button>
            </div>

            <div className={`sticky-wrapper${isSticky ? ' sticky' : ' relative'}`} ref={ref}>
                <Navbar />
            </div>
        </header>
    )
}

export default Header