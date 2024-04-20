import { FC } from "react";
import styles from "./Title.module.css";
const Title: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <h1 className={styles.title}>todos</h1>
      </div>
    </>
  );
};

export default Title;
