import { FC } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import Item from "./Item/Item";
import styles from "./Items.module.css";
import { type IItem } from "../../../types/types";

const Items: FC = (): JSX.Element => {
  const { items, filterBy } = useAppSelector((state) => state);
  const filterFunc = (item: IItem): boolean => {
    if (filterBy === "Active") return !item.completed;
    if (filterBy === "Completed") return item.completed;
    return true; // filterBy === 'All'
  };
  return (
    <>
      <div className={styles.inner}>
        {items
          .filter((item) => filterFunc(item))
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
      </div>
    </>
  );
};

export default Items;
