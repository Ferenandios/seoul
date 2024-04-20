import { FC } from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import styles from "./Length.module.css";

const Length: FC = (): JSX.Element => {
  const { items } = useAppSelector((state) => state);
  const notCompletedItems = items.filter((item) => !item.completed);
  return (
    <>
      <div className={styles.ansoc}>
        <span data-test="length" className={styles.inner}>
          {notCompletedItems.length}{" "}
          {notCompletedItems.length === 1 ? "item" : "items"} left
        </span>
      </div>
    </>
  );
};

export default Length;
