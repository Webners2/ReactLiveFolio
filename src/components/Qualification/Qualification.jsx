import React, { useState } from 'react';
import cx from 'classnames';
import style from '../../App.module.css';
import styles from './Qualification.module.css';

const Qualification = () => {

    // -----STATES-----
    const [eduClick, setEduClick] = useState(true);

    const [workClick, setWorkClick] = useState(false);

    // -----FUNCTIONS-----
    const checkParam = (qualificationValue) => {
        switch (qualificationValue) {
            case ('education'):
                return `${eduClick && `${styles.qualificationActive}`}`
            case ('work'):
                return `${workClick && `${styles.qualificationActive}`}`
            default:
                break;
        }
    };

    const addColor = (value) => {
        switch (value) {
            case ('Education'):
                return `${eduClick && `${styles.activeBtn}`}`
            case ('Work'):
                return `${workClick && `${styles.activeBtn}`}`
            default:
                break;
        }
    }
    // -----MAPPING ARRAYS-----
    const qualificationHeadData = [
        {
            qualificationClass: 'uil uil-graduation-cap',
            qualificationValue: 'Education'
        },
        {
            qualificationClass: 'uil uil-briefcase-alt',
            qualificationValue: 'Work'
        }
    ];

    const qualificationBodyData = [
        {
            qualificationValue: 'education',
            qualificationData: [
                {
                    qualificationTitle: 'Computer Science',
                    qualificationSubtitle: 'Karachi-University, UBIT',
                    qualificationCalenderPeriod: '2020-Enrolled'
                },
                {
                    qualificationTitle: 'Web Development',
                    qualificationSubtitle: 'SMIT & various others',
                    qualificationCalenderPeriod: '2019'
                },
                {
                    qualificationTitle: 'College',
                    qualificationSubtitle: 'PECHS College',
                    qualificationCalenderPeriod: '2017-2019'
                },
                {
                    qualificationTitle: 'High School',
                    qualificationSubtitle: 'St Patricks High School',
                    qualificationCalenderPeriod: '2007-2017'
                },
            ]
        },
        {
            qualificationValue: 'work',
            qualificationData: [
                {
                    qualificationTitle: 'Frontend Developer',
                    qualificationSubtitle: 'Fiverr',
                    qualificationCalenderPeriod: '2021-Present'
                },
                {
                    qualificationTitle: 'Web Developer',
                    qualificationSubtitle: 'Fiverr',
                    qualificationCalenderPeriod: '2021-Present'
                },
                {
                    qualificationTitle: 'Web Designer',
                    qualificationSubtitle: 'Fiverr',
                    qualificationCalenderPeriod: '2021-Present'
                },
                {
                    qualificationTitle: 'Graphics Designer',
                    qualificationSubtitle: 'Locally',
                    qualificationCalenderPeriod: '2019-2020'
                }
            ]
        }
    ];

    const LineDot = (index) => {
        switch (index) {
            case 0:
                return <>
                    <span className={styles.qualificationRounder} />
                    <span className={styles.qualificationLine} />
                </>
            case 1:
                return <>
                    <div></div>
                    <div>
                        <span className={styles.qualificationRounder} />
                        <span className={styles.qualificationLine} />
                    </div>
                </>
            case 2:
                return <>
                    <span className={styles.qualificationRounder} />
                    <span className={styles.qualificationLine} />
                </>
            case 3:
                return <>
                    <div></div>
                    <div>
                        <span className={styles.qualificationRounder} />
                    </div>
                </>
            default:
                break;
        }
    };
    return (
        <section className={cx(style.section, styles.qualification)}>
            <h2 className={style.sectionTitle}>
                Qualification
            </h2>
            <span className={style.sectionSubtitle}>
                My Personal Journey
            </span>

            <div className={cx(style.container, styles.qualificationContainer)}>
                <div className={styles.qualificationTabs}>
                    {qualificationHeadData.map((data, i) => {
                        return (
                            <div key={i} className={cx(style.btnFlex, styles.qualificationBtn, `${addColor(data.qualificationValue)}`)} onClick={() => {
                                switch (data.qualificationValue) {
                                    case ('Education'):
                                        switch (eduClick) {
                                            case true:
                                                setEduClick(eduClick)
                                                break;
                                            case false:
                                                setWorkClick(!workClick)
                                                setEduClick(!eduClick)
                                                break;
                                            default:
                                                break;
                                        }
                                        break;
                                    case ('Work'):
                                        switch (workClick) {
                                            case true:
                                                setWorkClick(workClick)
                                                break;
                                            case false:
                                                setEduClick(!eduClick)
                                                setWorkClick(!workClick)
                                                break;
                                            default:
                                                break;
                                        }
                                        break;
                                    default:
                                        break;
                                }
                            }}>
                                <i className={cx(`${data.qualificationClass}`, styles.qualificationIcon)} />
                                {data.qualificationValue}
                            </div>
                        )
                    })}
                </div>

                <div className={styles.qualificationSections}>
                    {qualificationBodyData.map((data, index) => {
                        return (
                            <div key={index} className={cx(styles.qualificationContent, `${checkParam(data.qualificationValue)}`)}>
                                {data.qualificationData.map((subData, i) => {
                                    return (
                                        <div key={i} className={styles.qualificationData}>
                                            {(i === 1 || i === 3) && LineDot(i)}
                                            <div>
                                                <h3 className={styles.qualificationTitle}>
                                                    {subData.qualificationTitle}
                                                </h3>
                                                <span className={styles.qualificationSubtitle}>
                                                    {subData.qualificationSubtitle}
                                                </span>
                                                <div className={styles.qualificationCalendar}>
                                                    <i className={`uil uil-calendar-alt`} />
                                                    {subData.qualificationCalenderPeriod}
                                                </div>
                                            </div>
                                            <div>
                                                {(i === 0 || i === 2) && LineDot(i)}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Qualification
