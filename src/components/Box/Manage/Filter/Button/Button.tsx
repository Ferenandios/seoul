import { FC } from "react";
import { toggleFilterButtonActive } from "../../../../../features/main.slice";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { type IFilterButtonList } from "../../../../../types/types";
import styles from "./Button.module.css";

const Button: FC<{ button: IFilterButtonList }> = ({ button }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { activeFilterButton } = useAppSelector((state) => state);
  const isCurrentActiveButton = activeFilterButton === button.id;
  const handleClick = () => {
    if (isCurrentActiveButton) return;
    dispatch(toggleFilterButtonActive(button.id));
  };
  return (
    <>
      <div className={styles.ansoc}>
        <button
          onClick={handleClick}
          style={{
            borderWidth: button.active ? "1px" : "",
            cursor: isCurrentActiveButton ? "default" : "pointer",
          }}
          className={styles.button}
        >
          {button.type}
        </button>
      </div>
    </>
  );
};

export default Button;
