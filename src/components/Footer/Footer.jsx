import React from 'react';
import cx from 'classnames';
import style from '../../App.module.css';
import styles from './Footer.module.css';
import { Link } from 'react-scroll';

const Footer = () => {
    // MAPPING OF ARRAY
    const footerWebLinks = [
        {
            href: 'services',
            footerLink: 'Services'
        },
        {
            href: 'portfolio',
            footerLink: 'Portfolio'
        },
        {
            href: 'contact',
            footerLink: 'Contact Me'
        }
    ];
    const footerSocialLinks = [
        {
            href: 'https://www.facebook.com/profile.php?id=100023218083092',
            socialIcon: 'uil uil-facebook-f'
        },
        {
            href: 'https://www.instagram.com/hsnm._/',
            socialIcon: 'uil uil-instagram'
        },
        {
            href: '#!',
            socialIcon: 'uil uil-twitter-alt'
        }
    ]

    // FUNCTIONS
    const True = (link) => {
        return (
            <a href={link.href} target='_blank' rel="noreferrer" className={styles.footerSocial}>
                <i className={link.socialIcon} />
            </a>
        )
    }

    const False = (link) => {
        return (
            <a href={link.href} className={styles.footerSocial}>
                <i className={link.socialIcon} />
            </a>
        )
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footerBg}>
                <div className={cx(style.container, style.grid, styles.footerContainer)}>
                    <div>
                        <h1 className={styles.footerTitle}>
                            Hsn Rasheed
                        </h1>
                        <span className={styles.footerSubtitle}>
                            Frontend Developer
                        </span>
                    </div>

                    <ul className={styles.footerLinks}>
                        {footerWebLinks.map((link, i) => {
                            return (
                                <li key={i}>
                                    <Link to={link.href}
                                        smooth={true}
                                        delay={50}
                                        duration={200}
                                        exact="true"
                                        className={styles.footerLink}>{link.footerLink}</Link>
                                </li>
                            )
                        })}
                    </ul>

                    <div className={styles.footerSocial}>
                        {footerSocialLinks.map((link, i) => {
                            return (
                                <span key={i} style={{margin : 0, padding: 0}}>
                                    {(i === 0 || i === 1) ? True(link) : False(link)}
                                </span>
                            )
                        })}
                    </div>
                </div>
                <p className={styles.footerCopyright}>
                    &#169; Hsn Rasheed. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
