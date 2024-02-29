// Importing the styles from the Navigation module
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="/images/food_logo.png" alt="logo"/>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Location</li>
        </ul>
    </nav>
  );
};

export default Navigation;