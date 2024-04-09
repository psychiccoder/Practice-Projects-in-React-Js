
import styles from "./Navigation.module.css";

function Navigation() {
    return (
        <nav className={`${styles.navigation} container`}>
            <div className="logo">
                <img className="img_1" src="./images/code.png" alt="" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navigation;