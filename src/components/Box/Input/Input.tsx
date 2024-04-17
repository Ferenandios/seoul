import { FC } from "react";
import Icon from "./Icon/Icon";
import Field from "./Field/Field";
import styles from "./Input.module.css";

const Input: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Icon />
        <Field />
      </div>
    </>
  );
};

export default Input;
