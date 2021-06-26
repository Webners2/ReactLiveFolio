import React, { useState } from 'react';
import cx from 'classnames';
import style from '../../App.module.css';
import styles from './Services.module.css';

const Services = () => {
    // -----STATES-----
    const [active_0, setActive_0] = useState(false);
    const [active_1, setActive_1] = useState(false);
    const [active_2, setActive_2] = useState(false);

    // -----FUNCTIONS-----
    const checkParam = (value) => {
        switch (value) {
            case ('Ui/Ux'):
                return `${active_0 ? `${styles.activeModal}` : ''}`
            case ('Frontend'):
                return `${active_1 ? `${styles.activeModal}` : ''}`
            case ('Branding'):
                return `${active_2 ? `${styles.activeModal}` : ''}`
            default:
                break;
        }
    };

    // ------MAPPING ARRAYS-----
    const servicesData = [
        {
            servicesIcon: 'uil uil-web-grid',
            servicesTitle_1: `Ui/Ux`,
            servicesTitle_2: `Designer`,
            listItemsValue: [
                {
                    value: 'I develop user interfaces.'
                },
                {
                    value: 'Web page designing.'
                },
                {
                    value: 'I create Ux element interactions.'
                },
                {
                    value: 'I create breath taking UI.'
                }
            ]
        },
        {
            servicesIcon: 'uil uil-arrow',
            servicesTitle_1: `Frontend`,
            servicesTitle_2: `Developer`,
            listItemsValue: [
                {
                    value: 'I develop web apps.'
                },
                {
                    value: 'Web page development.'
                },
                {
                    value: 'I create Ux element interactions.'
                },
                {
                    value: 'I make sure everything is responsive.'
                }
            ]
        },
        // {
        //     servicesIcon: 'uil uil-pen',
        //     servicesTitle_1: `Branding`,
        //     servicesTitle_2: `Designer`,
        //     listItemsValue: [
        //         {
        //             value: 'I develop user interfaces.'
        //         },
        //         {
        //             value: 'Web page development.'
        //         },
        //         {
        //             value: 'I create Ux element interactions.'
        //         },
        //         {
        //             value: 'I position your company brand.'
        //         }
        //     ]
        // }
    ]

    return (
        <section className={cx(style.section, styles.services)} id='services'>
            <h2 className={style.sectionTitle}>
                Services
            </h2>
            <span className={style.sectionSubtitle}>
                What I Offer
            </span>

            <div className={cx(style.container, style.grid, styles.servicesContainer)}>
                {servicesData.map((data, index) => {
                    return (
                        <div key={index} className={styles.servicesContent}>
                            <div>
                                <i className={cx(`${data.servicesIcon}`, styles.servicesIcon)} />
                                <h3 className={styles.servicesTitle}>
                                    {data.servicesTitle_1}<br />{data.servicesTitle_2}
                                </h3>
                            </div>
                            <span className={cx(style.btn, style.btnFlex, style.btnSmall, style.btnLink, style.serviceBtn, styles.servicesBtn)} onClick={() => {
                                switch (data.servicesTitle_1) {
                                    case ('Ui/Ux'):
                                        setActive_0(!active_0)
                                        break;
                                    case ('Frontend'):
                                        setActive_1(!active_1)
                                        break;
                                    case ('Branding'):
                                        setActive_2(!active_2)
                                        break;
                                    default:
                                        break;
                                }
                            }} >
                                View More
                                <i className={cx(`uil uil-arrow-right`, style.btnIcon)} />
                            </span>

                            <div className={cx(styles.servicesModal, `${checkParam(data.servicesTitle_1)}`)}>
                                <div className={styles.servicesModalContent}>
                                    <h4 className={styles.servicesModalTitle}>
                                        {data.servicesTitle_1}<br />{data.servicesTitle_2}
                                    </h4>
                                    <i className={cx(`uil uil-times`, styles.servicesModalClose)} onClick={() => {
                                        switch (data.servicesTitle_1) {
                                            case ('Ui/Ux'):
                                                setActive_0(!active_0)
                                                break;
                                            case ('Frontend'):
                                                setActive_1(!active_1)
                                                break;
                                            case ('Branding'):
                                                setActive_2(!active_2)
                                                break;
                                            default:
                                                break;
                                        }
                                    }} />

                                    <ul className={cx(styles.servicesModalServices, style.grid)}>
                                        {data.listItemsValue.map((subData, i) => {
                                            return (
                                                <li key={i} className={styles.servicesModalService}>
                                                    <i className={cx(`uil uil-check-circle`, styles.servicesModalIcon)} />
                                                    <p>
                                                        {subData.value}
                                                    </p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
