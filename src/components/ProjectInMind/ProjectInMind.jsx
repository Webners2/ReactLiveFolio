import React from 'react';
import cx from 'classnames';
import style from '../../App.module.css';
import styles from './ProjectInMind.module.css';
import Image from '../../assets/Images/thinking.webp';
import { Link } from 'react-scroll';

const ProjectInMind = () => {
    return (
        <section className={cx(styles.project, style.section)}>
            <div className={styles.projectBg}>
                <div className={cx(style.container, style.grid, styles.projectContainer)}>
                    <div className={styles.projectData}>
                        <h2 className={styles.projectTitle}>
                            Have a new project?
                        </h2>
                        <p className={styles.projectDiscription}>
                            Contact Me Now & get 20% discount on your new project.
                        </p>
                        <Link to='contact'
                        smooth={true}
                        delay={50}
                        duration={200}
                        exact="true"
                        className={cx(style.btn, style.btnFlex, style.btnWhite)}>
                            Contact Me
                            <i className={cx(`uil uil-message`, style.btnIcon, styles.projectIcon)} />
                        </Link>
                    </div>
                    <img src={Image} alt="Me" className={styles.projectImg} />
                </div>
            </div>
        </section>
    )
}

export default ProjectInMind
