import MenuLink from '../MenuLink';
import styles from './header.module.css';
import TemperatureIcon from '../../Services/TEMPapi'; 

export default function Menu() {
    return (
        <header>
            <nav className={styles.tituloHeader}>
                <MenuLink to="/">
                    ArKtetura.inc
                </MenuLink>
            <div className={styles.temperatureContainer}>
                <TemperatureIcon/>
            </div>
            </nav>
        </header>
    );
}
