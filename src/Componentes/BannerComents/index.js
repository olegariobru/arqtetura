import React from "react";
import styles from './bannerComents.module.css'
import MenuLink from "../MenuLink";
import { FaUserCheck } from "react-icons/fa";

export default function BannerComents(){
    return(
        <div>
            <div className={styles.comentsTit} data-aos="fade-up" data-aos-delay="200">
                <h1 className={styles.comentsTitulo}>
                    <MenuLink to="/">
                        O que nosso clientes dizem
                    </MenuLink>
                </h1>
            </div>

            <div className={styles.cardComents} data-aos="fade-up" data-aos-delay="200">
                <div className={styles.comentsUser}>
                    <FaUserCheck color="gray" size="100" />
                    <h2 className={styles.comentUserTit}>Joana Martins</h2>
                    <p className={styles.comentUserPag}>"Quando decidimos renovar nossa casa, estávamos um pouco apreensivos, mas o resultado superou todas as nossas expectativas. O arquiteto capturou perfeitamente o que imaginávamos e transformou nosso espaço em algo funcional e bonito. Cada detalhe reflete nosso estilo e nos sentimos em casa como nunca antes."</p>
                </div>

                <div className={styles.comentsUser}>
                    <FaUserCheck color="gray" size="100" />
                    <h2 className={styles.comentUserTit}>Ricardo Silva</h2>
                    <p className={styles.comentUserPag}>"Contratamos o escritório para projetar nosso novo escritório, e não poderíamos estar mais felizes com o resultado. Eles entenderam exatamente nossas necessidades e criaram um ambiente que é ao mesmo tempo profissional e acolhedor. A equipe está adorando o novo espaço, e isso tem impactado positivamente nossa produtividade."</p>
                </div>

                <div className={styles.comentsUser}>
                    <FaUserCheck color="gray" size="100" />
                    <h2 className={styles.comentUserTit}>Felipe Rodrigues:</h2>
                    <p className={styles.comentUserPag}>"Sempre sonhamos com uma casa que fosse nossa cara, e eles conseguiram realizar esse sonho. Desde o primeiro contato, fomos ouvidos e envolvidos em cada etapa do processo. O resultado foi uma casa que amamos e que reflete quem somos como família. Não poderíamos estar mais satisfeitos."</p>
                </div>
            </div>

        </div>
    )
}