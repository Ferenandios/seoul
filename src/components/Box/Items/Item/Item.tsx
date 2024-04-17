import { FC } from "react";
import { type IItem } from "../../../../types/types";
import styles from "./Item.module.css";
import Completed from "./Completed/Completed";
import Title from "./Title/Title";

const Item: FC<{ item: IItem }> = ({ item }): JSX.Element => {
  return (
    <div className={styles.inner}>
      <Completed item={item} />
      <Title item={item} />
    </div>
  );
};

export default Item;
