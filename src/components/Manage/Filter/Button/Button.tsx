import { FC } from "react";
import { IFilterButtonList } from "../../../../types/types";
import styles from "./Button.module.css";
import { useAppDispatch } from "../../../../hooks/hooks";
import { toggleFilterButtonActive } from "../../../../features/main.slice";

const Button: FC<{ button: IFilterButtonList }> = ({ button }): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleFilterButtonActive(button.id));
  };
  return (
    <>
      <div className={styles.ansoc}>
        <button
          onClick={handleClick}
          style={{ borderWidth: button.active ? "1px" : "" }}
          className={styles.button}
        >
          {button.type}
        </button>
      </div>
    </>
  );
};

export default Button;
