import styles from './bannerAbout.module.css';
import React from 'react';
import MenuLink from '../MenuLink';

export default function AboutUs() {
    return (
        <div>
            <div className={styles.aboutTitDV} data-aos="fade-up">
                <h1 className={styles.aboutTit}>
                    <MenuLink to="/">
                        Nossa História
                    </MenuLink>
                </h1>
            </div>
            <div className={styles.aboutUsParag} data-aos="fade-up" data-aos-delay="200">
                <p className={styles.paragAbout}>
                    Somos um escritório de arquitetura e urbanismo especializado em criar projetos modernos e inovadores. Com um olhar atento às tendências contemporâneas e um compromisso com a funcionalidade, transformamos ideias em espaços que inspiram e atendem às necessidades dos nossos clientes. Nossa equipe é formada por profissionais dedicados, que trabalham em colaboração para entregar soluções arquitetônicas que combinam estética, sustentabilidade e eficiência.
                </p>
            </div>
        </div>
    );
}
