import { FC } from "react";
import styles from "./Field.module.css";

const Field: FC = (): JSX.Element => {
  const handleKeyUp = () => {
    
  };
  return (
    <>
      <input
        onKeyUp={handleKeyUp}
        className={styles.input}
        placeholder="What needs to be done?"
        type="text"
      />
    </>
  );
};

export default Field;
