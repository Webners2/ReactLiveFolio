import React, { useState } from 'react';
import style from '../../App.module.css';
import styles from './Skills.module.css';
import './SubSkills.css';
import cx from 'classnames';

const Skills = () => {
    // -----STATES-----
    const [toggle0, setToggle0] = useState(false);

    const [toggle1, setToggle1] = useState(false);

    const [toggle2, setToggle2] = useState(false);

    // -----FUNCTIONS-----
    const checkParam = (skillsValue) => {
        switch (skillsValue) {
            case ('frontend'):
                return `${toggle0 ? `${styles.skillsOpen}` : `${styles.skillsClose}`}`
            case ('backend'):
                return `${toggle1 ? `${styles.skillsOpen}` : `${styles.skillsClose}`}`
            case ('designer'):
                return `${toggle2 ? `${styles.skillsOpen}` : `${styles.skillsClose}`}`
            default:
                break;
        }
    };

    const getActive = (skillsValue) => {
        switch (skillsValue) {
            case ('frontend'):
                return `${toggle0 ? `` : `${styles.activeArrow}`}`
            case ('backend'):
                return `${toggle1 ? `` : `${styles.activeArrow}`}`
            case ('designer'):
                return `${toggle2 ? `` : `${styles.activeArrow}`}`
            default:
                break;
        }
    };

    // -----MAPPING ARRAYS-----
    const skillsData = [
        {
            skillsIcon: 'uil uil-brackets-curly',
            skillsTitle: 'Frontend Developer',
            skillsValue: 'frontend',
            skillsSubtitle: 'More than 2 years',
            skillsSubData: [
                {
                    skillsName: 'HTML',
                    skillsNumber: '90%',
                    skillsTech: 'skillsHtml'
                },
                {
                    skillsName: 'CSS/SASS',
                    skillsNumber: '85%',
                    skillsTech: 'skillsCss'
                },
                {
                    skillsName: 'React/Redux',
                    skillsNumber: '90%',
                    skillsTech: 'skillsReactRedux'
                }
            ]
        },
        {
            skillsIcon: 'uil uil-server-network',
            skillsTitle: 'Backend Developer',
            skillsValue: 'backend',
            skillsSubtitle: 'More than 1.5 years',
            skillsSubData: [
                {
                    skillsName: 'Firebase',
                    skillsNumber: '70%',
                    skillsTech: 'skillsFirebase'
                }
            ]
        },
        {
            skillsIcon: 'uil uil-swatchbook',
            skillsTitle: 'Designer',
            skillsValue: 'designer',
            skillsSubtitle: 'More then a year',
            skillsSubData: [
                {
                    skillsName: 'Adobe Photoshop',
                    skillsNumber: '85%',
                    skillsTech: 'skillsPs'
                },
                {
                    skillsName: 'Adobe Illustrator',
                    skillsNumber: '70%',
                    skillsTech: 'skillsAi'
                },
                {
                    skillsName: 'Figma',
                    skillsNumber: '40%',
                    skillsTech: 'skillsFigma'
                }
            ]
        },
    ];

    return (
        <section className={cx(style.section, styles.skills)} id='skills'>
            <h2 className={style.sectionTitle}>
                Skills
            </h2>
            <span className={style.sectionSubtitle}>
                My Technical Work
            </span>
            <div className={cx(style.container, style.grid, styles.skillsContainer)}>
                {skillsData.map((skill, index) => {
                    return (
                        <div key={index} className={cx(styles.skillsContent, `${skill.skillsValue}`, `${checkParam(skill.skillsValue)}`)}>
                            <div className={cx(styles.skillsHeader)} onClick={() => {
                                switch (skill.skillsValue) {
                                    case ('frontend'):
                                        setToggle0(!toggle0)
                                        break;
                                    case ('backend'):
                                        setToggle1(!toggle1)
                                        break;
                                    case ('designer'):
                                        setToggle2(!toggle2)
                                        break;
                                    default:
                                        break;
                                }
                            }}>
                                <i className={cx(`${skill.skillsIcon}`, styles.skillsIcon)} />

                                <div>
                                    <h1 className={styles.skillsTitle}>
                                        {skill.skillsTitle}
                                    </h1>
                                    <span className={styles.skillsSubtitle}>
                                        {skill.skillsSubtitle}
                                    </span>
                                </div>
                                {/* .activeArrow */}
                                <i className={cx(`uil uil-angle-down`, styles.skillsArrow, `${getActive(skill.skillsValue)}`)} />
                            </div>
                            <div className={cx(style.grid, styles.skillsList)}>
                                {skill.skillsSubData.map((subSkill, i) => {
                                    return (
                                        <div key={i} className={styles.skillsData}>
                                            <div className={styles.skillsTitles}>
                                                <h3 className={styles.skillsName}>
                                                    {subSkill.skillsName}
                                                </h3>
                                                <span className={styles.skillsNumber}>
                                                    {subSkill.skillsNumber}
                                                </span>
                                            </div>
                                            <div className={styles.skillsBar}>
                                                <span className={cx(styles.skillsPercentage, `${subSkill.skillsTech}`)} />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills;