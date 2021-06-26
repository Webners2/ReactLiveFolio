import React from 'react';
import cx from 'classnames';
import style from '../../App.module.css';
import styles from './Contact.module.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    // FUNCTIONS
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_utc2db7', e.target, 'user_6bTWPMbHzqpvBTGPPZk2F')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    // MAPPING OF ARRAY
    const contactInfo = [
        {
            contactIcon: 'uil uil-phone',
            contactTitle: 'Call Me',
            contactSubtitle: '+92 3115445471'
        },
        {
            contactIcon: 'uil uil-envelope',
            contactTitle: 'Email',
            contactSubtitle: 'hassanmughal12386@gmail.com'
        },
        {
            contactIcon: 'uil uil-map-marker',
            contactTitle: 'Location',
            contactSubtitle: 'Karachi, Pakistan.'
        }
    ];

    const formInfo = [
        {
            contactLabel: 'Name',
            name: 'name',
            type: 'text'
        },
        {
            contactLabel: 'Email',
            name: 'email',
            type: 'email'
        }
    ]

    return (
        <section className={cx(style.section, styles.contact)} id='contact'>
            <h2 className={style.sectionTitle}>
                Contact Me
            </h2>
            <span className={style.sectionSubtitle}>
                Get In Touch
            </span>

            <div className={cx(style.container, style.grid, styles.contactContainer)}>
                <div>
                    {contactInfo.map((info, i) => {
                        return (
                            <div key={i} className={styles.contactInfo}>
                                <i className={cx(`${info.contactIcon}`, styles.contactIcon)} />

                                <div>
                                    <h3 className={styles.contactTitle}>
                                        {info.contactTitle}
                                    </h3>
                                    <span className={styles.contactSubtitle}>
                                        {info.contactSubtitle}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <form onSubmit={sendEmail} className={cx(style.grid, styles.contactForm)}>
                    <div className={cx(style.grid, styles.contactInputs)}>
                        {formInfo.map((info, i) => {
                            return (
                                <div key={i} className={styles.contactContent}>
                                    <label className={styles.contactLabel}>{info.contactLabel}</label>
                                    <input name={info.name} type={info.type} className={styles.contactInput} required />
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.contactContent}>
                        <label className={styles.contactLabel}>Project</label>
                        <input name="project" type="text" className={styles.contactInput} required />
                    </div>

                    <div className={styles.contactContent}>
                        <label className={styles.contactLabel}>Message</label>
                        <textarea name="message" rows="7" className={styles.contactInput} />
                    </div>

                    <div>
                        <button type="submit" className={cx(styles.btn, styles.btnFlex)}>
                            Send Message
                            <i className={cx(`uil uil-message`, style.btnIcon)} />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
