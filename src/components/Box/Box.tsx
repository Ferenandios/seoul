import { FC } from "react";
import styles from "./Box.module.css";

const Box: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}></div>
    </>
  );
};

export default Box;
