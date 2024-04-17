import { FC } from "react";
import Button from "./Button/Button";
import styles from "./Filter.module.css";
import { useAppSelector } from "../../../hooks/hooks";

const Filter: FC = (): JSX.Element => {
  const { filterButtonList } = useAppSelector((state) => state);
  return (
    <>
      <div className={styles.inner}>
        {filterButtonList.map((button) => (
          <Button key={button.id} button={button} />
        ))}
      </div>
    </>
  );
};

export default Filter;
