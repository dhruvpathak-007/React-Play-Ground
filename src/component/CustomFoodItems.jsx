/* eslint-disable react/prop-types */
import styles from "./CustomFoodItems.module.css";
const CustomFoodItems = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      className={styles.input}
      onChange={(event) => handleOnChange(event)}
    />
  );
};

export default CustomFoodItems;
