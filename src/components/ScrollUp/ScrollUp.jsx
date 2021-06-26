import React, { useState } from 'react';
import cx from 'classnames';
import styles from './ScrollUp.module.css';
import { Link } from 'react-scroll';

const ScrollUp = () => {
    // STATES
    const [scroll, setScroll] = useState(false);

    // FUNCTIONS
    const scrollUp = () => {
        if (window.scrollY >= 560){
          setScroll(true)
        }
        else{
          setScroll(false)
        }
      }
    
      window.addEventListener('scroll', scrollUp)
    return (
        <>
            <Link to='home'
                smooth={true}
                delay={50}
                duration={200}
                exact="true"
                className={cx(styles.scrollUp, `${scroll && `${styles.showScroll}`}`)}
            >
                <i className={cx(`uil uil-arrow-up`, styles.scrollUpIcon)} />
            </Link>
        </>
    )
}

export default ScrollUp
