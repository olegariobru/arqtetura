import styles from './bannerContact.module.css';
import MenuLink from '../MenuLink';
import { FiPhoneCall } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

export default function Contato(){
    const abrirIconeEmaillick = () =>{
        window.location.href = 'mailto:ark@icloud.com';
    }

    const AbrirIconeZapZap = () => {
        window.location.href = 'https://wa.me/5511999999999';
    };


    return(
        <div>
            <div className={styles.titContato} data-aos="fade-up" data-aos-delay="200">
                <h1 className={styles.titutoContato}><MenuLink to='/'>Como deseja falar conosco?</MenuLink></h1>
            </div>

            <div className={styles.iconesContato} data-aos="fade-up" data-aos-delay="200">
                <div className={styles.iconePrinci}>                
                    <FiPhoneCall color='gray' size={45}/>
                    <p className={styles.iconeInfo}>(11) 3333-2222</p>
                </div>
                <div className={styles.iconePrinci} onClick={abrirIconeEmaillick}>                
                    <AiTwotoneMail color='gray' size={45} />
                    <p className={styles.iconeInfo}>ark@icloud.com</p>
                </div>  
                <div className={styles.iconePrinci} onClick={AbrirIconeZapZap}>
                    <FaWhatsapp color='gray' size={45} />
                    <p className={styles.iconeInfo}>Clique aqui</p>
                </div>
            </div>
        </div>
    )
}