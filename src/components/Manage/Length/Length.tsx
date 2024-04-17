import { FC } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import styles from './Length.module.css'

const Length: FC = (): JSX.Element => {
  const { items } = useAppSelector((state) => state);
  return (
    <>
      <div className={styles.ansoc}>
        <span className={styles.inner}>
          {items.length} {items.length === 1 ? "item" : "items"} left
        </span>
      </div>
    </>
  );
};

export default Length;
