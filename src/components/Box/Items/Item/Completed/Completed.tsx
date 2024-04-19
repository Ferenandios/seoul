import { FC } from "react";
import { GiCheckMark } from "react-icons/gi";
import { type IItem } from "../../../../../types/types";
import styles from "./Completed.module.css";
import { useAppDispatch } from "../../../../../hooks/hooks";
import { toggleItem } from "../../../../../features/main.slice";

const Completed: FC<{ item: IItem }> = ({ item }): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleItem(item.id));
  };
  return (
    <>
      <div className={styles.ansoc}>
        <button
          onClick={handleClick}
          style={{ borderColor: item.completed ? "#A4D5C9" : "" }}
          className={styles.inner}
        >
          {item.completed && <GiCheckMark size={16} fill="#A4D5C9" />}
        </button>
      </div>
    </>
  );
};

export default Completed;
