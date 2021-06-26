import React from 'react'
import cx from 'classnames';
import style from '../../App.module.css';
import styles from './HomePage.module.css';
import imageWithoutBg from '../../assets/Images/handRaised.webp';
import { Link } from 'react-scroll';

const HomePage = () => {
    // -----MAPPING ARRAYS-----
    const socialData = [
        {
            href: 'https://www.linkedin.com/in/hassan-mughal-25b02a214/',
            class: 'uil uil-linkedin-alt'
        },
        {
            href: 'https://github.com/Hsnmughal',
            class: 'uil uil-github-alt'
        },
        {
            href: '#!',
            class: 'uil uil-dribbble'
        }
    ];

    // FUNCTIONS
    const True = (social) => {
        return (
            <a href={social.href} className={styles.homeSocialIcon} target='_blank' rel="noopener noreferrer">
                <i className={social.class} />
            </a>
        )
    }

    const False = (social) => {
        return (
            <a href={social.href} className={styles.homeSocialIcon}>
                <i className={social.class} />
            </a>
        )
    }

    return (
        <main className={styles.main} id='home'>
            <section className={cx(styles.home, style.section)}>
                <div className={cx(styles.homeContainer, style.container, style.grid)}>
                    <div className={cx(styles.homeContent, style.grid)}>
                        <div className={styles.homeSocial}>
                            {socialData.map((social, i) => {
                                return (
                                    <span key={i} style={{margin : 0, padding: 0}}>
                                        {(i === 0 || i === 1) ? True(social, i) : False(social, i)}

                                    </span>
                                )
                            })}
                        </div>
                        <div className={styles.homeImg}>
                            <svg className={styles.homeBlob} viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <mask id="mask0" mask-type="alpha">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                    />
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                    />
                                    <image className={styles.homeBlobImg} x='12' y='18' href={imageWithoutBg} />
                                </g>
                            </svg>
                        </div>
                        <div className={styles.homeData}>
                            <h1 className={styles.homeTitle}>Hi, I'm Hsn</h1>
                            <h3 className={styles.homeSubtitle}>Front-End Web Developer</h3>
                            <p className={styles.homeDiscription}>Top notched experience in Web development, producing quality work efficiently.</p>
                            <Link to="contact"
                                smooth={true}
                                delay={50}
                                duration={200}
                                exact="true"
                                className={cx(style.btn, style.btnFlex)}>
                                Contact Me <i className={cx(style.btnIcon, `uil uil-message`)} />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.homeScroll}>
                        <Link
                            to="about"
                            smooth={true}
                            delay={50}
                            duration={200}
                            exact="true"
                            className={cx(styles.homeScrollBtn, style.btnFlex)}>
                            <i className={cx(`uil uil-mouse-alt`, styles.homeScrollMouse)} />
                            <span className={style.homeScrollName}>Scroll Down</span>
                            <i className={cx(`uil uil-arrow-down`, styles.homeScrollArrow)} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default HomePage;