import styles from './bannerProjects.module.css';
import MenuLink from '../MenuLink';
import projeto1 from '../../Images/projeto1.jpg';
import projeto2 from '../../Images/projeto2.jpg';
import projeto3 from '../../Images/Projeto3.webp';

export default function Projects(){
    return(
        <div>
            <div className={styles.cardsTit} data-aos="fade-up" data-aos-delay="200">
                <h1 className={styles.cardTitulo}>
                    <MenuLink to="/">
                        Nossos Projetos
                    </MenuLink>
                </h1>
            </div>


            <div className={styles.cards} data-aos="fade-up" data-aos-delay="200">
                <div className={styles.card}>
                    <img src={projeto1} alt="Foto do primeiro projeto" className={styles.cardImagem} />
                    <h2 className={styles.cardTit}>Casa Wolfmann</h2>
                    <p className={styles.cardDesc}>
                        A Casa Wolfmann é um refúgio sereno, onde os moradores podem desfrutar da tranquilidade e beleza da mata, em um ambiente de design sofisticado e harmonioso com a natureza.
                    </p>
                </div>

                <div className={styles.card}>
                    <img src={projeto2} alt="Foto do segundo projeto" className={styles.cardImagem} />
                    <h2 className={styles.cardTit}>Sala Berlin</h2>
                    <p className={styles.cardDesc}>
                        A Sala Berlin é um espaço moderno que combina elementos clássicos com toques contemporâneos, criando um ambiente acolhedor e elegante ideal para encontros e relaxamento.
                    </p>            
                </div>

                <div className={styles.card}>
                    <img src={projeto3} alt="Foto do terceiro projeto" className={styles.cardImagem} />
                    <h2 className={styles.cardTit}>Cozinha Moderna</h2>
                    <p className={styles.cardDesc}>
                       A Cozinha Moderna apresenta um design minimalista com linhas limpas e funcionalidade otimizada, incorporando materiais de alta qualidade para uma experiência culinária excepcional.
                    </p>           
                </div>
            </div>

        </div>
    )
}