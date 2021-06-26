import React from 'react';
import cx from 'classnames';
import style from '../../App.module.css';
import styles from './Portfolio.module.css';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

// -----SWIPER CSS-----
import './PortfolioSwiper.css';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Portfolio = () => {
    const cardsData = useSelector(state => state);

    return (
        <section className={cx(styles.portfolio, style.section)} id='portfolio'>
            <h2 className={style.sectionTitle}>
                Portfolio
            </h2>
            <span className={style.sectionSubtitle}>
                Recent Work
            </span>

            <div className={cx(style.container, styles.portfolioContainer)}>

                <Swiper 
                    cssMode={true} className={`swiper`}
                    loop={true}
                    navigation={
                        {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }
                    }
                    pagination={{
                        clickable: 'true'
                    }}
                >
                    {cardsData.map((data, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className={cx(style.grid, styles.portfolioContent)}>
                                    <img className={styles.portfolioImg} src={data.image} alt={data.title} />

                                    <div className={styles.portfolioData}>
                                        <h3 className={styles.portfolioTitle}>
                                            {data.title}
                                        </h3>
                                        <p className={styles.portfolioDiscription}>
                                            {data.detail}
                                        </p>
                                        <a href={data.link} target='_blank' rel="noreferrer" className={cx(style.btn, style.btnFlex, style.btnSmall, style.portfolioBtn, styles.portfolioBtn)}>
                                            View
                                            <i className={cx(`uil uil-arrow-right`, style.btnIcon)} />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    <div className="swiper-button-next">
                        <i className={cx(`uil uil-angle-right`, styles.swiperPorfolioIcon)} />
                    </div>
                    <div className="swiper-button-prev">
                        <i className={cx(`uil uil-angle-left`, styles.swiperPorfolioIcon)} />
                    </div>
                </Swiper>

            </div>
        </section>
    )
}

export default Portfolio
