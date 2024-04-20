import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { setItems } from "../../../../features/main.slice";
import styles from "./Clear.module.css";

const Clear: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state);
  const handleClick = () => {
    dispatch(setItems(items.filter((item) => !item.completed)));
  };
  return (
    <>
      <div className={styles.ansoc}>
        <button
          onClick={handleClick}
          data-test="clear"
          className={styles.button}
        >
          Clear completed
        </button>
      </div>
    </>
  );
};

export default Clear;
