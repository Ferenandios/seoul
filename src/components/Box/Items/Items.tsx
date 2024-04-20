import { FC } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import Item from "./Item/Item";
import styles from "./Items.module.css";
import { type IItem } from "../../../types/types";
import Empty from "./Empty/Empty";

const Items: FC = (): JSX.Element => {
  const { items, filterBy } = useAppSelector((state) => state);
  const filterFunc = (item: IItem): boolean => {
    if (filterBy === "Active") return !item.completed;
    if (filterBy === "Completed") return item.completed;
    return true; // filterBy === 'All'
  };
  const filterItems = (items: IItem[]): IItem[] => {
    return items.filter((item) => filterFunc(item));
  };
  const filteredItems: IItem[] = filterItems(items);
  return (
    <>
      <div className={styles.inner}>
        {filteredItems.length ? (
          <>
            {filteredItems.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </>
        ) : (
          <>
            <Empty />
          </>
        )}
      </div>
    </>
  );
};

export default Items;
