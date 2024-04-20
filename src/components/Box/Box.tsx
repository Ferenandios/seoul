import { FC } from "react";
import styles from "./Box.module.css";
import Input from "./Input/Input";
import Items from "./Items/Items";
import Manage from "./Manage/Manage";

const Box: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Input />
        <Items />
        <Manage />
      </div>
    </>
  );
};

export default Box;
