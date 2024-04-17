import { FC } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import Item from "./Item/Item";
import styles from "./Items.module.css";

const Items: FC = (): JSX.Element => {
  const { items } = useAppSelector((state) => state);
  return (
    <>
      <div className={styles.inner}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Items;
