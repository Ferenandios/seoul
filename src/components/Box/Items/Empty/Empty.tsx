import { FC } from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import styles from "./Empty.module.css";

const Empty: FC = (): JSX.Element => {
  const { filterBy } = useAppSelector((state) => state);
  return (
    <>
      <div className={styles.ansoc}>
        <h1 className={styles.title}>
          {filterBy === "All" ? "No items found" : `No ${filterBy} items found`}
        </h1>
      </div>
    </>
  );
};

export default Empty;
