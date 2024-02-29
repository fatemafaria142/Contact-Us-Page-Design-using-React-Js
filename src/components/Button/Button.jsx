import styles from "./Button.module.css";

const Button = ({isOutline, icon,text}) => {
  //All destructured elements are used.
  return (
<button className= {isOutline? styles.outline_btn:styles.primary_btn}>
{icon}
{text}
</button>
  );
};

export default Button;