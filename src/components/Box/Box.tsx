import { FC } from "react";
import styles from "./Box.module.css";
import Input from "./Input/Input";

const Box: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Input />
      </div>
    </>
  );
};

export default Box;
