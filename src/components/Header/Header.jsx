import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../Images/logo.png";

const Header = () => {
    const navigate = useNavigate();


    return (
        <header className={styles.header}>
            {/* Left -  Logo */}
            <div className={styles.logo_container}>
                <Link to="/">
                    <img src={logo} alt="Logo"
                         className={styles.logo} />
                </Link>
            </div>

            {/* Middle  */}
            <nav className={styles.nav_buttons}>
                <a href="/" className={styles.nav_link}>
                    Home
                </a>

            </nav>

            {/*Right*/}

        </header>
    );
};

export default Header;
