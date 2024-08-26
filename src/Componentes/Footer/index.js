import styles from './footer.module.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';


export default function Footer() {
        return (
        <footer className={styles.footer}>
            <div className={styles.footerCo}>
                <div className={styles.contatoInfo}>
                    <h3>Contato</h3>
                    <p>Email: <a href="mailto:contact@example.com">ark@icloud.com</a></p>
                    <p>Telefone: <a href="tel:+5511999999999">(11) 99999-9999</a></p>
                </div>

                <div className={styles.links}>
                    <h3>Links Rápidos</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                    </ul>
                </div>

                <div className={styles.socialMedia}>
                    <h3>Redes Sociais</h3>
                    <div className={styles.socialIcones}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF size={24} />
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.footerFim}>
                <p>&copy; {new Date().getFullYear()} ARKtetura. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
