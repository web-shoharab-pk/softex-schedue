import React, { useEffect, useState } from 'react';
import './ScrollToTop.scss';

const ScrollToTop = () => {

    const [showScroll, setShowScroll] = useState(false);
    const [stroke, setStroke] = useState(0);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 50) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 50) {
            setShowScroll(false)
        }
    };


    window.addEventListener('scroll', checkScrollTop)
    console.log("window.pageYOffset", stroke);

   
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 310;
        setStroke(scrolled)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return (
        <div onClick={scrollTop} className='scroll-to-top active-progress' style={{ display: showScroll ? 'block' : 'none' }}>
            <svg className='progress-circle svg-content' width="100%" height="100%" viewBox='-1 -1 102 102'>
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ strokeDashoffset: 930 - stroke }}></path>
            </svg>
            <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/arrow-up-short.svg" alt="" />
        </div>
    );
};

export default ScrollToTop;