import { FC } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "./Icon.module.css";

const Icon: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <MdKeyboardArrowDown size={32} />
      </div>
    </>
  );
};

export default Icon;
