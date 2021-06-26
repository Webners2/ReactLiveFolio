import React from 'react'
import cx from 'classnames';
import style from '../../App.module.css';
import styles from './About.module.css';
import Image from '../../assets/Images/handPalm.webp';
import Cv from '../../assets/Pdf/Hr.pdf';

const About = () => {
    // -----MAPPING ARRAYS-----
    const AboutInfo = [
        {
            infoTitle: '02+',
            infoName_1: 'Years',
            infoName_2: 'Experience'
        },
        {
            infoTitle: '15+',
            infoName_1: 'Projects',
            infoName_2: 'Completed'
        },
        {
            infoTitle : '02',
            infoName_1 : 'Companies',
            infoName_2 : 'Worked'
        }
    ];

    return (
        <section className={cx(styles.about, style.section)} id='about' >
            <h2 className={style.sectionTitle}>
                About Me
            </h2>
            <span className={style.sectionSubtitle}>
                My Introduction
            </span>
            <div className={cx(styles.aboutContainer, style.container, style.grid)} >
                <img src={Image} alt="Me" className={styles.aboutImg} />

                <div className={styles.aboutData} >
                    <p className={styles.aboutDiscription}>
                        A Pakistan based Frontend Web Developer & currently an Undergraduate student focused
                        on exploring the boundries of Web Dev. Apart from being a web developer I'm also familiar with the background of
                        graphics with a good taste of Intiutive UI/UX.
                    </p>
                    <div className={styles.aboutInfo}>
                        {AboutInfo.map((about, i) => {
                            return (
                                <div key={i}>
                                    <span className={styles.aboutInfoTitle}>
                                        {about.infoTitle}
                                    </span>
                                    <span className={styles.aboutInfoName}>
                                        {about.infoName_1}<br />{about.infoName_2}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.aboutBtns}>
                        <a download='' href={Cv} className={cx(style.btn, style.btnFlex)} >
                            Download CV<i className={cx(`uil uil-download-alt`, style.btnIcon)} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
