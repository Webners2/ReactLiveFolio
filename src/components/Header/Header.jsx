import React, { useEffect, useState } from 'react'
import lightLogo from '../../assets/Images/logoLight.svg';
import darkLogo from '../../assets/Images/logoDark.svg';
import cx from 'classnames';
import style from '../../App.module.css';
import styles from './Header.module.css';
import { Link } from 'react-scroll';

const Header = () => {
    // -----STATES-----
    const [toggle, setToggle] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [themeToggle, setThemeToggle] = useState(false);

    // -----MAPPING ARRAYS-----
    const headerData = [
        {
            name: 'home',
            value: 'Home',
            class: 'uil uil-estate'
        },
        {
            name: 'about',
            value: 'About',
            class: 'uil uil-user'
        },
        {
            name: 'skills',
            value: 'Skills',
            class: 'uil uil-file-alt'
        },
        {
            name: 'services',
            value: 'Services',
            class: 'uil uil-briefcase-alt'
        },
        {
            name: 'portfolio',
            value: 'Portfolio',
            class: 'uil uil-scenery'
        },
        {
            name: 'contact',
            value: 'Contact',
            class: 'uil uil-message'
        }
    ];

    // FUNCTION
    const scrollHeader = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', scrollHeader)
    useEffect(() => {
        const themeChanger = () => {
            themeToggle ? document.body.classList.add(`${style.darkTheme}`) : document.body.classList.remove(`${style.darkTheme}`)
        }
        themeChanger()
    }, [themeToggle])

    return (
        <div>
            <header className={cx(style.header, `${navbar && `${styles.scrollHeader}`}`)}>
                <nav className={cx(style.container, styles.nav)}>
                    <Link to='home'
                        smooth={true}
                        delay={50}
                        duration={200}
                        exact="true"
                    ><span><img className={styles.logo} src={themeToggle ? darkLogo : lightLogo} alt="Hsn" /></span></Link>

                    <div className={cx(styles.navMenu, `${toggle ? `${styles.showMenu}` : ''}`)}>
                        <ul className={cx(style.grid, styles.navList)}>
                            {headerData.map((data, i) => {
                                return (
                                    <li key={i} className={styles.navItem}>
                                        <Link to={data.name}
                                            spy={true}
                                            activeClass={styles.active}
                                            smooth={true}
                                            delay={10}
                                            duration={200}
                                            exact="true"
                                            offset={-60}
                                            className={styles.navLink} onClick={() => setToggle(!toggle)}>
                                            <i className={cx(styles.navIcon, `${data.class}`)} /> {data.value}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <i className={cx(styles.navClose, `uil uil-times`)} onClick={() => setToggle(!toggle)} />
                    </div>
                    <div className={styles.navBtns}>

                        {/* THEME CHANGING BTN */}
                        <i id='hello' className={cx(`uil ${themeToggle ? `uil-sun` : `uil-moon`}`, styles.changeTheme)} onClick={() => setThemeToggle(!themeToggle)} />
                        <div className={styles.navToggle} onClick={() => setToggle(!toggle)} >
                            <i className={`uil uil-apps`} />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Header;