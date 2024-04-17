import { FC } from "react";
import Length from "./Length/Length";
import Filter from "./Filter/Filter";
import styles from "./Manage.module.css";
import Clear from "./Clear/Clear";

const Manage: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Length />
        <Filter />
        <Clear />
      </div>
    </>
  );
};

export default Manage;
