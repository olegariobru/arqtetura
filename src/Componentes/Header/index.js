import MenuLink from '../MenuLink';
import styles from './header.module.css';

export default function Menu() {
    return (
        <header>
            <nav className={styles.tituloHeader}>
                <MenuLink to="/">
                    ArKtetura.inc
                </MenuLink>
            </nav>
        </header>
    );
}
