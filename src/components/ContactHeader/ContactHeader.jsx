
// Importing the styles from the ContactHeader module
import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
        <h1>Delight Your Palate: Connect with Us for Culinary Excellence!</h1>
        <p>Welcome to Food Order Contact! We're all about making your food wishes come true. Whether you're into cozy home-cooked flavors or adventurous international tastes, our menu has something to wow your taste buds. Join us for a hassle-free ordering experience, and let's create a dining adventure that goes beyond your expectations. It's not just a meal; it's a tailored experience just for you!</p>
    </div>
  );
};

export default ContactHeader;