import { FC } from "react";
import styles from "./Box.module.css";
import Input from "./Input/Input";
import Items from "./Items/Items";

const Box: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Input />
        <Items />
      </div>
    </>
  );
};

export default Box;
